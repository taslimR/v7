(function() {
  var creativeDefinition = {
    customScriptUrl: '',
    isDynamic: false,
    delayedImpression: false,
    standardEventIds: {
      DISPLAY_TIMER: '72',
      INTERACTION_TIMER: '73',
      INTERACTIVE_IMPRESSION: '74',
      MANUAL_CLOSE: '75',
      BACKUP_IMAGE_IMPRESSION: '76',
      EXPAND_TIMER: '77',
      FULL_SCREEN: '78',
      VIDEO_PLAY: '79',
      VIDEO_VIEW_TIMER: '80',
      VIDEO_COMPLETE: '81',
      VIDEO_INTERACTION: '82',
      VIDEO_PAUSE: '83',
      VIDEO_MUTE: '84',
      VIDEO_REPLAY: '85',
      VIDEO_MIDPOINT: '86',
      VIDEO_STOP: '87',
      VIDEO_UNMUTE: '88',
      DYNAMIC_CREATIVE_IMPRESSION: '',
      HTML5_CREATIVE_IMPRESSION: ''
    },
    exitEvents: [
      {
        name: 'Clicked Feed Article',
        reportingId: '22953866',
        url: '',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'Logo Exit',
        reportingId: '22954106',
        url: 'http://www.shareinvestor.com/sg',
        targetWindow: '_blank',
        windowProperties: ''
      },
      {
        name: 'More Press Release Exit',
        reportingId: '22954346',
        url: 'http://www.listedcompany.com/',
        targetWindow: '_blank',
        windowProperties: ''
      }
    ],
    timerEvents: [
    ],
    counterEvents: [
    ],
    childFiles: [
      {
        name: 'main.css',
        url: '/ads/richmedia/studio/pv2/36987916/20170303085852088/main.css',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'logo.jpg',
        url: '/ads/richmedia/studio/pv2/36987916/20170303085852088/logo.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'backup.jpg',
        url: '/ads/richmedia/studio/pv2/36987916/20170303085852088/backup.jpg',
        isVideo: false,
        transcodeInformation: null
      },
      {
        name: 'main.js',
        url: '/ads/richmedia/studio/pv2/36987916/20170303085852088/main.js',
        isVideo: false,
        transcodeInformation: null
      }
    ],
    videoFiles: [
    ],
    videoEntries: [
    ],
    primaryAssets: [
      {
        id: '60749906',
        artworkType: 'HTML5',
        displayType: 'BANNER',
        width: '300',
        height: '400',
        servingPath: '/ads/richmedia/studio/pv2/36987916/20170303085852088/index.html',
        zIndex: '1000000',
        customCss: '',
        flashArtworkTypeData: null,
        htmlArtworkTypeData: {
          isTransparent: false,
          sdkVersion: '01_158' // Duplicating sdk version in subsequent field as version format not the same.
        },
        floatingDisplayTypeData: null,
        expandingDisplayTypeData: null,
        imageGalleryTypeData: null,
        pageSettings:null,
layoutsConfig: null,
layoutsApi: null
      }
    ]
  }
  var rendererDisplayType = '';
  rendererDisplayType += 'html_';
  var rendererFormat = 'inpage';
  var rendererName = rendererDisplayType + rendererFormat;

  var creativeId = '120797840426';
  var adId = '0';
  var templateVersion = '200_178';
  var studioObjects = window['studioV2'] = window['studioV2'] || {};
  var creativeObjects = studioObjects['creatives'] = studioObjects['creatives'] || {};
  var creativeKey = [creativeId, adId].join('_');
  var creative = creativeObjects[creativeKey] = creativeObjects[creativeKey] || {};
  creative['creativeDefinition'] = creativeDefinition;
  var adResponses = creative['adResponses'] || [];
  for (var i = 0; i < adResponses.length; i++) {
    adResponses[i].creativeDto && adResponses[i].creativeDto.csiEvents &&
        (adResponses[i].creativeDto.csiEvents['pe'] =
            adResponses[i].creativeDto.csiEvents['pe'] || (+new Date));
  }
  var loadedLibraries = studioObjects['loadedLibraries'] = studioObjects['loadedLibraries'] || {};
  var versionedLibrary = loadedLibraries[templateVersion] = loadedLibraries[templateVersion] || {};
  var typedLibrary = versionedLibrary[rendererName] = versionedLibrary[rendererName] || {};
  if (typedLibrary['bootstrap']) {
    typedLibrary.bootstrap();
  }
})();
