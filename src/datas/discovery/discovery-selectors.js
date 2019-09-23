const discoverySelectors = {};

discoverySelectors.isDiscoveryGlobalSectionEnd = state => state.discovery.isGlobalSectionEnd;

discoverySelectors.isDiscoveryCustomSectionEnd = state => state.discovery.isCustomSectionEnd;

discoverySelectors.isDiscoveryRandomSectionEnd = state => state.discovery.isRandomSectionEnd;

discoverySelectors.getDiscoveryGlobalSectionGroupsId = state => state.discovery.globalSectionGroupsId;

discoverySelectors.getDiscoveryCustomSectionGroupsId = state => state.discovery.customSectionGroupsId;

discoverySelectors.getDiscoveryRandomSectionGroupsId = state => state.discovery.randomSectionGroupsId;

export default discoverySelectors;
