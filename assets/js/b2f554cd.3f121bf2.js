"use strict";(self.webpackChunkwww_cloudcarbonfootprint_org=self.webpackChunkwww_cloudcarbonfootprint_org||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"on-prem-data-collection","metadata":{"permalink":"/blog/on-prem-data-collection","editUrl":"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blog/2023-09-07-on-prem-data-collection.md","source":"@site/blog/2023-09-07-on-prem-data-collection.md","title":"CCF Data Collection: On-Premise","description":"Using enterprise tooling to collect and populate the CCF Data Model","date":"2023-09-07T00:00:00.000Z","formattedDate":"September 7, 2023","tags":[{"label":"electronicarts","permalink":"/blog/tags/electronicarts"},{"label":"data","permalink":"/blog/tags/data"},{"label":"on-premise","permalink":"/blog/tags/on-premise"}],"readingTime":11.845,"hasTruncateMarker":false,"authors":[{"name":"Kenneth Sambrook","title":"Senior Software Engineer (Security) @ Electronic Arts","key":"ksambrook"}],"frontMatter":{"slug":"on-prem-data-collection","title":"CCF Data Collection: On-Premise","description":"Using enterprise tooling to collect and populate the CCF Data Model","authors":"ksambrook","tags":["electronicarts","data","on-premise"]},"nextItem":{"title":"Running and Deploying CCF in a Virtual Machine","permalink":"/blog/ccf-on-vm"}},"content":"## Forward\\n\\nEmbarking on the journey of collecting data for your on-premise resources can at first seem like an impossible task. What data do I actually need? Do you have the right tooling? What stakeholders are you going to need, and how much time is this going to take? Where do you store the data? Most importantly, how do you get the data once you identify the tooling available to you? We\u2019ll cover all of that below, but first just know that despite your initial trepidation; endpoint data exists in countless tools. With a little creativity and knowhow, you should have no trouble identifying, retrieving, and storing endpoint data to be utilized within the CCF Dashboard..\\n\\n## Getting Started With On-Premise Data Collection\\n\\n### The On-premise data model\\n\\nThe CCF CLI takes in on-premise data using a predefined model. This model dictates the type, content, and format of the data needed in order to facilitate and proper and accurate data import and manipulation. You can view the current custom data mode, as well as methodology write ups in the [On-Premise](https://www.cloudcarbonfootprint.org/docs/on-premise/) parts of the CCF docs . The data model contains a lot of common fields such as CPU cores, memory, and where in the world a particular machine is located. We\u2019ll cover these in more detail as we continue on, however just keep in mind that we need all of this data for each endpoint to provide accurate estimates.\\n\\n### Data Sources\\n\\nYour organization will most likely contain a multitude of sources from which endpoint data can originate. From computer accounts in Active Directory to System information stored within tools such as your Antivirus or system patching tools; large swathes of data are stored. It\u2019s in these places you\u2019ll be looking for your target endpoints and pulling relevant data from these sources to populate the On-Premise data model.\\n\\nEndpoint data can also come from some unlikely places. If you are finding yourself lost in your search for endpoint data, think of the following list of tooling to see if perhaps your IT department has one of these tools:\\n\\n- Antivirus suites\\n- Vulnerability management suites\\n- CMDB applications (Inventory management)\\n- Configuration management suites\\n  - Puppet\\n  - Chef\\n  - SCCM\\n  - MEM\\n- System monitoring suites\\n  - Nagios\\n  - Cacti\\n  - Grafana\\n    - Node Exporter\\n    - Telegraf\\n    - Prometheus Databases\\n\\nThe list goes on and on. There are countless tools currently available for organizations to perform a wide range of tasks related to endpoint management, monitoring, and protection. The wonderful thing about tooling such as this is that they also rely on large amounts of data related to the endpoint. Antivirus tools need to know if the machine has been online and communicating with the management console for updates and status information. Monitoring tools rely solely on doing exactly what their name suggests\u2013monitoring endpoints. CMDB tools are directly responsible for endpoint and inventory management. Many IT departments consider CMDB tooling a source of endpoint and inventory truth. Data here is likely to be very accurate.\\n\\n<font size=\\"1\\">\\n    NOTE: Keep in mind the permissions needed to access these data sources, and ensure you\u2019re following your company\'s best practices on the retrieval and storage of this data. Where possible, always partner with the data source owner to ensure you\u2019re not only getting the best data, but handling it in a manner that doesn\u2019t expose your company to unnecessary risks or security incidents.\\n</font>\\n\\n<br/>\\n\\nData sources are the most important part of embarking on a journey of tracking and estimating the environmental impacts of your enterprise. As you begin, be creative and leverage your existing partnerships with various departments within your organization to find these unlikely sources of data. Continue to rely on the On-premise Data Model to match data sources with the required fields.\\n\\nWhen choosing a data source, be mindful of the size of the dataset, and your ability to continually pull data out. Intermittent, or services with unreliable uptimes are not preferable sources. Data sources with large datasets that cannot be filtered or compressed may prove difficult or costly to ingest. Always try to choose data sources that have exposed API\u2019s if possible. This will make automating and scheduling data collection far simpler in the long run. If API\u2019s are simply not possible, strive instead for tooling that can generate scheduled reports containing the data you need. If possible opt for CSV, JSON, XML outputs that you can use easily with your data collection and storage processes. We\u2019ll cover this in the section _Collecting on-premise data_.\\n\\nBefore we move on to the means and methods in which you might collect and store this data, bear in mind that some of the fields in the On-premise Data Model are to be collected over time. We will go into greater detail about these fields later on. Just understand that your chosen data source does not necessarily have to include this data. You may be able to generate the data with good automation, and scheduled data retrieval from other information provided by the data source.\\n\\n- dailyUptime\\n- weeklyUptime\\n- monthlyUptime\\n- annualUptime\\n\\nOnce you have a source of data to utilize, you\u2019ll be using that data to calculate the above fields.\\n\\n### Data Collection and Storage Technologies\\n\\nFor example\u2019s sake, let\u2019s say you have chosen your AntiVirus as your initial data source. This tool contains all the basic information needed for the On-premise Data Model, and it has a robust REST API that can be utilized to fetch the data. Where do we go from here? Let\u2019s have a look at a basic workflow diagram.\\n\\n![Workflow Diagram](../static/img/ccf_on_prem_blog_img_1.png)\\n\\nThis is the simplest possible way to represent the actions to be taken when it comes to collecting and storing data. Although simple to visualize, the means in which you achieve this goal can grow from very simple to very complex depending on the amount of data you will have, the length of time you\u2019ll be holding onto it, and any security or risk considerations being taken into account. As with data sources, there are countless tools and techniques one can use to perform these actions.\\n\\nBecause we\u2019ll need to capture this data over time, choose a data collection technology that allows for accurate and timely scheduled runs. Being able to collect data, daily, or by hour will greatly improve the accuracy of your data.\\n\\n#### AWS Glue with AWS S3 Data Lake\\n\\nThis is an excellent cloud native approach to capturing large to extremely large amounts of data easily. AWS Glue provides capabilities such as scheduled, and interval based run initialization and the S3 Datalake can handle extremely large amounts of data.\\n\\nAdditionally you can pair this with AWS functionality such as AWS Athena, RDS, and Lambda to make transforming, and retrieving the data simple, effective, and accurate.\\n\\n#### Django with Django-Rest-Framework, Celery-Beat, and PostgreSQL\\n\\nIf you have a Python developer available and are interested in a cost effective, or free solution; open source may be your best choice. Django is an extremely robust web framework built on the \u201cView-Model\u201d strategy. It contains an impressive number of built in capabilities including \u201cCRUD\u201d functionality which makes creating, and using database models a breeze.\\n\\nWith the addition of 2 additional plugins it can provide all the data storage and retrieval functionality you would need. Django-Rest-Framework makes creating API\u2019s within Django simple, thus aiding in retrieving your stored data. Celery-Beat is a database-backed task scheduler that can make scheduling accurate and timely data collection a breeze.\\n\\nDjango also works incredibly well within containerized environments such as Docker, and Kubernetes.\\n\\n### On-premise Data - Data Model\\n\\nMuch of the data you\u2019ll be collecting is very straightforward. Machine name, CPU type and memory count may be readily available. Some of the data however requires special consideration. Let\u2019s explore those briefly.\\n\\n#### Special Data Model Fields\\n\\nThe below data points will require special care when collecting the data. Take care to ensure that you build these considerations into your data model to ensure an accurate data collection process.\\n\\n- machineType:\\n  - Different machine types will generate different power loads. The formula used in calculating power draw for different types of machines will vary based on the type. If your data source includes a type, you should ensure that it is formatted to be either \u201cserver\u201d, \u201claptop\u201d, or \u201cdesktop\u201d. Being unable to provide this information will impact the accuracy of your power usage calculations.\\n- cpuUtilization:\\n  - Your data collection tool may be unable to provide this information. If that is the case, your best option is to make a best case estimation.\\n- [daily,weekly,monthly,annual]Uptime:\\n  - These 4 fields are the most important, and also require a good data collection process. Using your data sources, you\u2019ll need to provide incremental totals for these fields using uptime data if available. Not being able to provide this data will lead to very inaccurate carbon impact estimations.\\n\\n## Collecting On-premise Data\\n\\nOnce you\u2019ve identified a suitable data source and method, you can now begin the process of collecting and storing your on-premise data. For the purposes of the write-up we\u2019re going to use an \u201cAntivirus\u201d as our data source.\\n\\n### The Data Source - Antivirus\\n\\nOur data source is an Antivirus suite that provides up to the minute endpoint stats that cover all of the basic sources.\\n\\n- cpuDescription\\n- memory\\n- machineType (Server, Laptop, Desktop)\\n- machineName\\n\\nIn addition to the basics, the data source also has some additional data which will prove useful to use later on.\\n\\n- lastAgentCommunication\\n  - This tells us when the endpoint was last online. It will be useful in determining system uptime.\\n- agentPublicIP\\n  - Knowing the country and region where an endpoint resides, helps us calculate carbon intensity. The public IP can be used to identify the geolocation data associated with the agent to put this into practice.\\n\\n#### Collecting the data\\n\\nTo make things easier for us, our data source also provides a REST API in which we can collect the data in real time. If your data source doesn\u2019t provide an API, attempt to get regular reports in CSV, XML, or JSON format that you can use in lieu of making API requests.\\n\\nDepending on the method of data collection and storage you\u2019ve chosen, some coding is most likely going to be required. It would be extremely beneficial to enlist the help of a developer or data engineer to assist you in reliably collecting and storing this data. Having the ability to retrieve and parse data from an API, work with S3 or a simple database, and create basic automations will come in handy throughout this process. Remember the illustration above.\\n\\n![Workflow Diagram](../static/img/ccf_on_prem_blog_img_1.png)\\n\\nYou\u2019ll want to ensure that whatever method you\u2019ve chosen for data collection, that you\u2019re able to perform the collection at a set timed interval. Tracking machine uptime is paramount to being successful here.\\n\\n#### Calculating upTime hours\\n\\nA number of fields in the On-premise Data Model, represent uptime hours of your agent over a period of time. As you collect uptime information about your endpoints, you will want to populate these fields and increment each individual counter.\\n\\nEach uptime counter represents a historical period of time. Daily, weekly, yearly, as well as perhaps 30, 60, 90 day increments. These fields may be present in your data source from day one, but perhaps you may need to create and calculate these.\\n\\n![Uptime Diagram](../static/img/ccf_on_prem_blog_img_2.png)\\n\\nIn the diagram above is an oversimplified view of a data collection event for a single endpoint. Let\'s say for instance the counter you\'re incrementing is the **dailyUptime** counter. As data about the endpoint comes in it\u2019s determined that the endpoint has been online in the last 1 hour. To increment the daily counter we first need to check the timestamp of when the counter was last reset. If the counter is less than 24 hours old, then we can increment the counter by 1 hour. If it is older than 24 hours we should reset the counter to 1. Additionally you should also reset the timestamp to a current date and time.\\n\\nHere is a quick sample of pseudo code to illustrate a couple of these use cases.\\n\\n**Increment Daily Uptime Counters**\\n\\n![Daily Uptime Code Snippet](../static/img/ccf_on_prem_blog_img_5.png)\\n\\n**Increment 30 Day Uptime Counters**\\n\\n![Monthly Uptime Code Snippet](../static/img/ccf_on_prem_blog_img_6.png)\\n\\nThis same principle applies to all other values related to uptime. **weeklyUptime**, **monthlyUptime**, and **yearlyUptime** can all be calculated this way. You can also add additional uptime counters as you see fit; however ensure that the required uptime fields from the On-premise Data Model are present.\\n\\nWhen creating the initial timestamps always remember to start the timestamp from the moment the machine was first added to the data model. It is not advisable to to create an arbitrary initial timestamp as this can cause your uptime fields to be wildly inaccurate.\\n\\n## Conclusion\\n\\nCollecting on-premise data for activities such as patching, inventory, and lifecycle management has been happening across IT organizations for a very long time. An incredible amount of work has gone into the development and deployment of tooling to achieve those goals. As the world moves more towards implementing green initiatives to better shape their technology futures, being able to calculate and report on the environmental impact of our infrastructures grows as well.\\n\\nEven though you may not have a fit for purpose tool to collect on-premise data, that doesn\u2019t mean you can\u2019t still get the data you need. This data most likely already exists in many other tools already in use by your organization. The Anti-Virus used in this post is clearly not meant for this task, but with a bit of trial and error, it can do exactly what is needed to gather all of the necessary data. Be creative and keep an open mind. Data exists everywhere.\\n\\n<font size =\\"1\\">\\n    This paper represents an exploratory project undertaken by EA employees to explore ways to leverage existing data and automate methods to calculate electricity use and emissions associated with on-premise endpoints. The statements and opinions expressed in this article are those of the author and do not represent how EA calculates emissions and do not constitute or imply an endorsement of a product, process or service.\\n</font>"},{"id":"ccf-on-vm","metadata":{"permalink":"/blog/ccf-on-vm","editUrl":"https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/blog/2023-08-23-ccf-on-vm.md","source":"@site/blog/2023-08-23-ccf-on-vm.md","title":"Running and Deploying CCF in a Virtual Machine","description":"Since the launch of Cloud Carbon Footprint (CCF), our team always aimed to maintain and develop flexibility in both how the tool is used and the options for its deployment. With such a large variety of infrastructure across organizations, we strive to balance supporting as many environments out of the box as possible while also preserving the customization options you may need.","date":"2023-08-23T00:00:00.000Z","formattedDate":"August 23, 2023","tags":[{"label":"thoughtworks","permalink":"/blog/tags/thoughtworks"},{"label":"deployment","permalink":"/blog/tags/deployment"}],"readingTime":10.505,"hasTruncateMarker":false,"authors":[{"name":"Arik Smith","title":"Senior Software Engineer @ Thoughtworks","url":"https://github.com/4upz","email":"arik.m.smith@gmail.com","imageURL":"https://github.com/4upz.png","key":"asmith"}],"frontMatter":{"slug":"ccf-on-vm","title":"Running and Deploying CCF in a Virtual Machine","authors":"asmith","tags":["thoughtworks","deployment"]},"prevItem":{"title":"CCF Data Collection: On-Premise","permalink":"/blog/on-prem-data-collection"}},"content":"Since the launch of Cloud Carbon Footprint (CCF), our team always aimed to maintain and develop flexibility in both how the tool is used and the options for its deployment. With such a large variety of infrastructure across organizations, we strive to balance supporting as many environments out of the box as possible while also preserving the customization options you may need.\\n\\nOne of the most popular options for both piloting a CCF instance as a proof of concept as well as for an internal production environment is to run CCF within a virtual machine. After all, it is a great way to get your feet wet with CCF without bringing extra dependencies on your local machine, tying up any resources, and enabling options for an always-on service that expands beyond your local machine. Alternatively, you may want to get creative by customizing or automating how CCF fits into your use cases. For example, perhaps you may want to set up a cloud function that automatically fetches cloud estimates for every recent day, week, or month? Or maybe you want a fully accessible CCF API for members of your organization or team to query? If any of these benefits sound appealing then the VM option might be for you, and you\u2019re in the right place!\\n\\nVirtual machines come in many shapes and sizes across different cloud provider platforms, including AWS EC2, Google Cloud Compute Engine, and Azure Virtual Machine services. For the sake of this article, we\u2019ll be focusing on how to create a CCF application running on an AWS EC2 instance. However, depending on the chosen operating system or distribution of your machine, the steps should be relatively the same!\\n\\n## Creating your EC2 Instance\\n\\nCCF at its core is a Node application running Express.JS for its API and React for its client. So once you have the environment setup for one endpoint of the application, you\u2019ll be able to run instances of CCF\u2019s API, CLI, and Client on the same machine, and switch between them if desired. Before we do that, let\u2019s create our machine and set up our environment.\\n\\nTo start, we assume that you already have the following:\\n\\n- An existing AWS account with permissions for creating and managing EC2 instances\\n- Followed the steps for setting up billing data for your [cloud provider](https://www.cloudcarbonfootprint.org/docs/aws) (i.e. AWS steps 1-3)\\n- Basic familiarity with navigating the AWS console\\n\\nLet\u2019s navigate to the EC2 dashboard and select the option to launch a new instance using the shiny \u201cLaunch Instances\u201d button:\\n\\n![Launch Instances Button](../static/img/ccf_vm_blog_img_1.png)\\n\\nFrom this point, we\u2019ll be selecting the configuration options for our new machine. While the free tier may be tempting, we\u2019ll go with a t2.medium. I\u2019ve found that on smaller instances such as a t2.micro, the limited hardware can sometimes cause issues when installing node modules or running the app. So we could use the extra \u201coomph\u201d. However, for the sake of your own instance, please consider the following:\\n\\n- If you\u2019re expecting a large amount of estimates, consider a larger instance with higher memory and compute power.\\n- If you plan on running a [MongoDB instance](https://www.cloudcarbonfootprint.org/docs/data-persistence-and-caching#mongodb-storage) on the same machine and persisting a large amount of estimates, consider increasing the storage capacity of your instance.\\n- If costs and efficiency is top of mind, consider choosing the option for an ARM instance as you will not be able to migrate from a non-ARM instance afterwards.\\n- Running EC2 instances incur costs! So make sure to stop/delete instances when done with them and that you choose a capable instance that fits within your budget.\\n\\n![Launch Instances Config](../static/img/ccf_vm_blog_img_2.png)\\n\\nYou may also notice that we\u2019ll be going with an Ubuntu image as our operating system \u2013 a popular and widely accepted distribution that you can use with any VM host. You\u2019re welcome to choose a different Linux-based operating system such as Amazon Linux in the case of an EC2 instance. Amazon Linux serves as a Linux distribution optimized for running in AWS. It is also optimized for running most Linux-based software making the steps you\u2019ll follow almost identical. For the sake of keeping this tutorial a little more friendly for other cloud VM services, we\u2019ll be sticking with Ubuntu.\\n\\nAfter making some final decisions in creating a key pair (required for connecting via an SSH client) and choosing a security group, we\u2019re going to hit the even more shiny \u201cLaunch Instance\u201d button. After a short wait, you should see a notification that the instance has been created and is running. So let\u2019s connect to it!\\n\\n_Side Note_: If you\u2019re more comfortable with the [cloud provider CLI](https://aws.amazon.com/cli/) or other ways of configuring resources, these steps can be replicated using those methods as well.\\n\\n## Setting Up Your CCF Instance\\n\\nConnect to your instance using your preferred method \u2013 whether it be in the cloud provider console or through a local terminal via SSH. Once you\u2019re in, we will need to configure NPM and Node so that our server can support CCF\u2019s code.\\n\\n### Installing Node.JS\\n\\nWe\u2019ll be following the officially recommended steps for [setting up Node.JS on an EC2 Instance](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html). Henceforth, we will be relying on NVM to make this an easy process! [NVM](https://www.bing.com/search?pglt=641&q=nvm&cvid=ef35fe5448b345eba7740e8aae9b0b8e&aqs=edge..69i57j0l5j69i61l3.383j0j1&FORM=ANNTA1&PC=U531) will manage our versions of Node for us, making migrating or downgrading easier.\\n\\n```console\\ncurl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash\\n```\\n\\nWe then need to activate NVM by running the following command:\\n\\n```console\\n. ~/.nvm/nvm.sh\\n```\\n\\nYou can verify that it is active by running `nvm -v` in which you should see an output of `0.39.5` or similar.\\n\\nCCF requires NodeJS 16 or later. While I prefer 18 since it is the current LTS release, you will need to run the following command \u2013 replacing the number with the version that you wish to install:\\n\\n```console\\nnvm install 18\\n```\\n\\n_Note_: Make sure to check the latest version compatibility that your image supports. For example, Amazon Linux 2 does not support Node 18 at the time of writing this article.\\n\\nNVM will also inform you that it is setting the current version as the default. This is useful for whenever you need to switch node versions or have node disabled for some reason, as you can use `nvm use \u2013default` to re-enable it. You can verify that Node is successfully installed by running `node -v`, in which you should see an output of the version that you installed.\\n\\n### Installing Yarn\\n\\nWhile installing node also automatically installs npm, CCF uses [Yarn](https://v3.yarnpkg.com/) as its package manager. Fortunately, Node 16 and up make it super easy to install thanks to its inclusion of [corepack](https://github.com/nodejs/corepack).\\n\\nTo install Yarn, we simply need to enable corepack using the following command:\\n\\n```console\\ncorepack enable\\n```\\n\\nWith a little magic, you can now use `yarn -v` to verify that yarn is now installed and enabled in your server. You\u2019ll see that version 1 (yarn classic) is enabled. If you\u2019ve been reading the CCF documentation, you may notice that it requires Yarn 3. Do not fear, CCF will take care of the upgrade during its installation.\\n\\nNow for the fun part!\\n\\n### Installing CCF\\n\\nThere are multiple ways to install CCF, as noted in the [Getting Started](https://www.cloudcarbonfootprint.org/docs/getting-started) section. While you can clone the app and get full access to all of its packages and latest features as soon as they are available, we\u2019re going to go with the [Create App](https://www.cloudcarbonfootprint.org/docs/create-app) option as the more stable and simple solution.\\n\\nTo get started, we will run the create-app command with an additional flag to note that we wish to skip the `yarn install` step. This gives us flexibility in case we wish to connect our data using the [guided install](https://www.cloudcarbonfootprint.org/docs/getting-started#guided-install) process, which will end up doing the installation step for us.:\\n\\n```console\\nnpx @cloud-carbon-footprint/create-app --skip-install\\n```\\n\\nYou\u2019ll be asked to install the latest version of the `create-app` package, in which you can reply \u201cyes\u201d.\\n\\n![Name Create App](../static/img/ccf_vm_blog_img_3.png)\\n\\nWhen prompted for a name, feel free to choose whichever name you prefer your app to have. In this example we\u2019ll be going `my-ccf-app`. Take note that this will also be the name of the directory that the app will be created in. So you may want to make sure the name is unique and matches any folder naming conventions you may have.\\n\\nAfterwards, you\u2019ll see that the script takes care of creating your files and moving them to a directory named after your app. Your app will be successfully created!\\n\\n![Create App Successful](../static/img/ccf_vm_blog_img_4.png)\\n\\nUse `cd my-ccf-app` to switch to the directory of your app. You should see the following contents within your directory:\\n\\n```console\\nlerna.json  package.json  packages  tsconfig.json\\n```\\n\\n_Note_: If you run `yarn -v` again while in the directory, you\u2019ll see that the version has automatically updated to 3.1.1 like magic. \u2728\\n\\nAt this moment, you can either connect your data by manually creating a `.env` file in either your `packages/api` or `packages/cli` directory based on the `.env.template` files in those same directories. Make sure to check out the documentation on how to connect data for your chosen cloud provider:\\n\\n- [AWS](https://www.cloudcarbonfootprint.org/docs/aws)\\n- [Google Cloud](https://www.cloudcarbonfootprint.org/docs/gcp)\\n- [Azure](https://www.cloudcarbonfootprint.org/docs/azure)\\n\\nAlternatively, you can use the guided installation method mentioned above to run a friendly CLI program that will walk you through setting up your credentials and will create the `.env` files for you!\\n\\nIf you\u2019d rather skip connecting your data altogether, you can also [run with mock data](https://www.cloudcarbonfootprint.org/docs/run-with-mocked-data) instead and move on to the next step.\\n\\n## Running Your App\\n\\nAfter following the setup method of your choice, let\u2019s top things off by doing a `yarn install`. Once the dependencies are done installing, we\u2019re good to [start our app](https://www.cloudcarbonfootprint.org/docs/getting-started#starting-the-app)!\\n\\nYou can now use `yarn start` to concurrently start both the Client (react dashboard) and the API (express app).\\n\\n- If running the client or with mock data, your CCF Dashboard will be available at port 3000 of your instance. You can view the dashboard by navigating to the public IP of your instance followed by the corresponding port.\\n  - Please note, you will need to configure your security or network settings to make this port available\\n- You can also use `yarn start-api` instead to only [run the API](https://www.cloudcarbonfootprint.org/docs/running-the-api). You can verify that the API is running by making a request to one of the endpoints on port 4000 of the instance.\\n  - For example, try making the following command in another terminal instance:\\n    <br/>\\n    `curl http://[your-ip]:4000/api/regions/emissions-factors`\\n  - Please note, you will need to configure your security or network settings to make this port available if attempting to make requests outside of the instance.\\n- You can also use yarn `start-cli` for [running the CLI](https://www.cloudcarbonfootprint.org/docs/running-the-cli) and requesting estimates directly within the terminal.\\n\\nCongratulations! You now have successfully created a CCF app running in a virtual machine.\\n\\nYou may notice that if you exit the SSH or terminal session, that the running process will not persist. In this case, you can use a tool such as a [Screen](https://www.gnu.org/software/screen/) to create an uninterruptible terminal session to run your app in. To do so, try running the following command:\\n\\n```console\\nscreen -S ccf\\n```\\n\\nThis will create a new Screen session called \u201cccf\u201d. From here, you can run one of the `yarn start` commands to run your app and then use `ctrl+a` `ctrl+d` command keys to detach from the session. The session will stay on in the background and your CCF app will stay running!\\n\\nYou can always reattach to the session by entering `screen -r` in your terminal.\\n\\nIf you\u2019re more comfortable and don\u2019t like the idea of having terminal sessions running in the background, you can also create a `.service` file to [run your application as a background service](https://stackoverflow.com/questions/4018154/how-do-i-run-a-node-js-app-as-a-background-service) instead.\\n\\n## What Now?\\n\\nNow that you have an always-running CCF instance on a cloud-based virtual machine, you can now continue to explore both realtime and historical estimates for all of your services in the cloud. If you\u2019d like to explore additional ways to enhance your CCF app, consider the following:\\n\\n- [Running the CCF App with Docker](https://www.cloudcarbonfootprint.org/docs/run-with-docker)\\n- Creating a cron-triggered cloud function to automatically fetch new estimates\\n- Configuring a MongoDB instance to [persist new and historical estimate data](https://www.cloudcarbonfootprint.org/docs/data-persistence-and-caching#mongodb-storage)\\n- Using the CLI app to [seed data into the configured cache option](https://www.cloudcarbonfootprint.org/docs/data-persistence-and-caching#seeding-cache-file) for your instance\\n- Creating an internal dashboard for your team or organization to view estimate data\\n\\nHopefully you\u2019ve found this walkthrough helpful and see that this is only the beginning of your cloud carbon footprint journey and taking steps to help create a greener cloud! For more walkthroughs and technical deep dives, make sure to keep following the [CCF Blog](http://cloudcarbonfootprint.org/blog) and share your experience on our [discussions page](https://github.com/cloud-carbon-footprint/cloud-carbon-footprint/discussions)!"}]}')}}]);