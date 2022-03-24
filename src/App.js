import 'tui-image-editor/dist/tui-image-editor.css';
import ImageEditor from '@toast-ui/react-image-editor';

import './App.css';

const myTheme = {
  'common.bi.image': 'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
  'common.bisize.width': '251px',
  'Common.bisize.height': '21px',
  'common.backgroundImage': './img/bg.png',
  'common.backgroundColor': '#fff',
  'common.border': '1px solid #c1c1c1',
  // Theme object to extends default dark theme.
};

const App = () => (
  <ImageEditor
    includeUI={{
      loadImage: {
        path: 'img/sampleImage.jpg',
        name: 'SampleImage',
      },
      theme: myTheme,
      menu: ['crop','flip','rotate','draw','icon','text','mask','shape', 'filter'], 
      initMenu: 'text',
      uiSize: {
        width: '100vw',
        height: '100vh',
      },
      menuBarPosition: 'left',
    }}
    cssMaxHeight={80}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70,
    }}
    usageStatistics={true}
  />
);

export default App;
