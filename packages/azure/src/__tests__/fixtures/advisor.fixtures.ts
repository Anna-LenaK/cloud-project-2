import { ResourceRecommendationBase } from '@azure/arm-advisor'

export const mockShutdownVmRecommendationsResult: ResourceRecommendationBase[] =
  [
    {
      id: 'test-recommendation-id',
      name: 'test-recommendation-id',
      type: 'Microsoft.Advisor/recommendations',
      category: 'Cost',
      impact: 'High',
      impactedField: 'Microsoft.Compute/virtualMachines',
      impactedValue: 'test-vm-name',
      lastUpdated: new Date('2022-11-14T18:34:02.954Z'),
      recommendationTypeId: 'test-recommendation-type-id',
      shortDescription: {
        problem: 'Right-size or shutdown underutilized virtual machines',
        solution: 'Right-size or shutdown underutilized virtual machines',
      },
      extendedProperties: {
        MaxCpuP95: '1',
        MaxTotalNetworkP95: '0',
        MaxMemoryP95: '59',
        savingsCurrency: 'USD',
        savingsAmount: '30',
        annualSavingsAmount: '360',
        deploymentId: 'test-deployment-id',
        roleName: 'test-vm-name',
        currentSku: 'Standard_B2s',
        targetSku: 'Shutdown',
        recommendationMessage: 'Delete this Virtual Machine',
        recommendationType: 'Shutdown',
        regionId: 'useast',
        subscriptionId: 'test-subscription-id',
      },
      resourceMetadata: {
        resourceId: 'test-resource-id',
      },
    },
    {
      id: 'test-recommendation-id',
      name: 'test-recommendation-id',
      type: 'Microsoft.Advisor/recommendations',
      category: 'Cost',
      impact: 'High',
      impactedField: 'Microsoft.Compute/virtualMachines',
      impactedValue: 'test-vm-name',
      lastUpdated: new Date('2022-11-14T18:34:02.954Z'),
      recommendationTypeId: 'test-recommendation-type-id',
      shortDescription: {
        problem: 'Right-size or shutdown underutilized virtual machines',
        solution: 'Right-size or shutdown underutilized virtual machines',
      },
      extendedProperties: {
        MaxCpuP95: '1',
        MaxTotalNetworkP95: '0',
        MaxMemoryP95: '59',
        savingsCurrency: 'USD',
        savingsAmount: '30',
        annualSavingsAmount: '360',
        deploymentId: 'test-deployment-id',
        roleName: null,
        currentSku: 'Standard_M128ms',
        targetSku: 'Shutdown',
        recommendationMessage: 'Delete this Virtual Machine',
        recommendationType: 'Shutdown',
        regionId: 'test-region',
        subscriptionId: 'test-subscription-id',
      },
      resourceMetadata: {
        resourceId: 'test-resource-id',
      },
    },
    {
      id: 'test-recommendation-id',
      name: 'test-recommendation-id',
      type: 'Microsoft.Advisor/recommendations',
      category: 'Cost',
      impact: 'High',
      impactedField: 'Microsoft.Compute/virtualMachines',
      impactedValue: 'test-vm-name',
      lastUpdated: new Date('2022-11-14T18:34:02.954Z'),
      recommendationTypeId: 'test-recommendation-type-id',
      shortDescription: {
        problem: 'Right-size or shutdown underutilized virtual machines',
        solution: 'Right-size or shutdown underutilized virtual machines',
      },
      extendedProperties: {
        MaxCpuP95: '1',
        MaxTotalNetworkP95: '0',
        MaxMemoryP95: '59',
        savingsCurrency: 'USD',
        savingsAmount: '30',
        annualSavingsAmount: '360',
        deploymentId: 'test-deployment-id',
        roleName: 'test-vm-name',
        currentSku: 'Standard_NC6',
        targetSku: 'Shutdown',
        recommendationMessage: 'Delete this Virtual Machine',
        recommendationType: 'Shutdown',
        regionId: 'useast',
        subscriptionId: 'test-subscription-id',
      },
      resourceMetadata: {
        resourceId: 'test-resource-id',
      },
    },
    {
      id: 'test-recommendation-id',
      name: 'test-recommendation-id',
      type: 'Microsoft.Advisor/recommendations',
      category: 'Cost',
      impact: 'High',
      impactedField: 'Microsoft.Compute/virtualMachines',
      impactedValue: 'test-vm-name',
      lastUpdated: new Date('2022-11-14T18:34:02.954Z'),
      recommendationTypeId: 'test-recommendation-type-id',
      shortDescription: {
        problem: 'Right-size or shutdown underutilized virtual machines',
        solution: 'Right-size or shutdown underutilized virtual machines',
      },
      extendedProperties: {
        MaxCpuP95: '1',
        MaxTotalNetworkP95: '0',
        MaxMemoryP95: '59',
        savingsCurrency: 'USD',
        savingsAmount: '30',
        annualSavingsAmount: '360',
        deploymentId: 'test-deployment-id',
        roleName: 'test-vm-name',
        currentSku: 'test-current-sku',
        targetSku: 'Shutdown',
        recommendationMessage: 'Delete this Virtual Machine',
        recommendationType: 'Shutdown',
        regionId: 'useast',
        subscriptionId: 'test-subscription-id',
      },
      resourceMetadata: {
        resourceId: 'test-resource-id',
      },
    },
  ]

export const mockRightsizeVmRecommendationsResults: ResourceRecommendationBase[] =
  [
    {
      id: 'test-recommendation-id',
      name: 'test-recommendation-id',
      type: 'Microsoft.Advisor/recommendations',
      category: 'Cost',
      impact: 'High',
      impactedField: 'Microsoft.Compute/virtualMachines',
      impactedValue: 'test-vm-name',
      lastUpdated: new Date('2022-11-14T18:34:02.954Z'),
      recommendationTypeId: 'test-recommendation-type-id',
      shortDescription: {
        problem: 'Right-size or shutdown underutilized virtual machines',
        solution: 'Right-size or shutdown underutilized virtual machines',
      },
      extendedProperties: {
        MaxCpuP95: '1',
        MaxTotalNetworkP95: '0',
        MaxMemoryP95: '59',
        savingsCurrency: 'USD',
        savingsAmount: '30',
        annualSavingsAmount: '360',
        deploymentId: 'test-deployment-id',
        roleName: 'test-vm-name',
        currentSku: 'M16ms/Standard',
        targetSku: 'M8ms Spot',
        recommendationMessage: 'Right-size this Virtual Machine',
        recommendationType: 'Right-size',
        regionId: 'useast',
        subscriptionId: 'test-subscription-id',
      },
      resourceMetadata: {
        resourceId: 'test-resource-id',
      },
    },
    {
      id: 'test-recommendation-id',
      name: 'test-recommendation-id',
      type: 'Microsoft.Advisor/recommendations',
      category: 'Cost',
      impact: 'High',
      impactedField: 'Microsoft.Compute/virtualMachines',
      impactedValue: 'test-vm-name',
      lastUpdated: new Date('2022-11-14T18:34:02.954Z'),
      recommendationTypeId: 'test-recommendation-type-id',
      shortDescription: {
        problem: 'Right-size or shutdown underutilized virtual machines',
        solution: 'Right-size or shutdown underutilized virtual machines',
      },
      extendedProperties: {
        MaxCpuP95: '1',
        MaxTotalNetworkP95: '0',
        MaxMemoryP95: '59',
        savingsCurrency: 'USD',
        savingsAmount: '30',
        annualSavingsAmount: '360',
        deploymentId: 'test-deployment-id',
        roleName: 'test-vm-name',
        currentSku: 'M16ms/Standard',
        targetSku: 'M8ms Spot',
        recommendationMessage: 'Change the sku of this Virtual Machine',
        recommendationType: 'SkuChange',
        regionId: 'useast',
        subscriptionId: 'test-subscription-id',
      },
      resourceMetadata: {
        resourceId: 'test-resource-id',
      },
    },
  ]
