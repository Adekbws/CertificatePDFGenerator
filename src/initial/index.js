
const clearFileNames = (files_array) => {
    const cleredNames = [];
    files_array.forEach(
      (el, i) => {
        const clearFontName = el.split('.').slice(0, -1).join('.');
  
        //removing reps
        if(!cleredNames.includes(clearFontName)){
          cleredNames.push(clearFontName);
        }
      }
    );
  
    return cleredNames;
  }; 

const filePath = (file_context, name) => {
  try {
    return file_context(name, true);
    }
    catch (e) {
    console.warn('problem z wgraniem pliku: '+name);
    return false;
    }
};

var fs = require('fs');
var ncp = require('ncp').ncp;
ncp.limit = 16;

var dirs = ['/public', '/public/css', '/public/uploads'];
dirs.map((path)=>{
  if (!fs.existsSync(__dirname + path)){
    fs.mkdirSync(__dirname + path);
  }
})

const initial_images = fs.readdirSync(__dirname + '/../src/img/initial'); 

initial_images.map((item, key) => {
  ncp(__dirname + '/../src/img/initial/'+item, __dirname + '/public/uploads/'+item);
})

const fonts = require.context(__dirname + '/../fonts/', true);

var fontsCssFile = fs.createWriteStream(__dirname + '/public/css/fonts.css', {
  flags: 'w' // 'a' means appending (old data will be preserved)
})

ncp(__dirname + '/../src/css/loader.css', __dirname + '/public/css/loader.css');

const font_files = fs.readdirSync(__dirname + '/../src/fonts/'); 
const background_files = fs.readdirSync(__dirname + '/../src/img/backgrounds'); 

const fontsToSelect = clearFileNames(font_files);

fontsToSelect.map((item, key) => {
  
  const fontUrl_woff = filePath(fonts, './'+item+'.woff');
  const fontUrl_woff2 = filePath(fonts, './'+item+'.woff2');
  const fontUrl_ttf = filePath(fonts, './'+item+'.ttf');

  const data = ` @font-face{font-family:${item}; font-weight:normal; font-style:normal;
    src:${fontUrl_woff ? `url('../../${fontUrl_woff}') format('woff')` : ``}
    ${fontUrl_woff2 ? `, url('../../${fontUrl_woff2}') format('woff2')` : ``}
    ${fontUrl_ttf ? `, url('../../${fontUrl_ttf}') format('ttf')` : ``}
  ;}`

  fontsCssFile.write(data) // append string to your file  

})
fontsCssFile.end();

const initColor = {r: 255, g: 255, b: 255, a: 1};    
const textProps = [
{text:'<p>Certyfikat</p>',fontName:'Aquatico-Regular', fontColor:initColor, fontSize: "85", p_t:196 , active:true}, 
{text:'<p>Franek Dolas</p>',fontName:'COUTURE-Bold', fontColor:initColor, fontSize: "55", m_t: "30", p_t:325},
{text:'<p>ukończył kurs</p>',fontName:'Roboto-Regular', fontColor:initColor, fontSize: "25", m_t: "60", p_t:480},
{text:'<p>Zaawansowany programista REACT</p>',fontName:'Roboto-Bold', fontColor:initColor, fontSize: "35", m_t: "20", p_t:525},
{text:'<p>Zorganizowany przez:</p>',fontName:'Roboto-Regular', fontColor:initColor, fontSize: "25", m_t: "40", p_t:621},
{text:'<p>IT SCHOOL</p>',fontName:'Roboto-Bold', fontColor:initColor, fontSize: "35", m_t: "20", p_t:664},
{text:'<p>W zakresie:</p>',fontName:'Roboto-Regular', fontColor:initColor, fontSize: "25", m_t: "40", p_t:721},
{text:'<p>Programowania typu full-stack zapewniającego, kompleksową wiedzę i umiejętności z zakresu front-end i back-end. Poznając najważniejsze i najbardziej popularne moduły takie jak:</p>',fontName:'Roboto-Regular', fontColor:initColor, fontSize: "25", m_t: "40", p_t:765},
{text:'<p>-Styled Components<br>-React Redux<br>-Prop Types<br>-i inne...</p>',fontName:'Roboto-Regular', fontColor:initColor, fontSize: "25", m_t: "20", align: "left", boxAlign: "left", p_t:928},
{text:'<p>Projekt Generatora w trakcie rozwoju</p>',fontName:'Roboto-Regular', fontColor:{r: 223, g: 0, b: 36, a: 1}, fontSize: "25", m_t: "40", p_t:1118},
];

const activeOptions = {
id:null,
type:"text"
}

const images = [
{url: '/uploads/crown.png', p_t:24, width:200},
{url: '/uploads/crown_line.png', p_t:410, width:700},
{url: '/uploads/crown_cert.png', p_t:1218, width:200},
{url: '/uploads/white_signature.png',p_t:1218, p_l:190, width:255}
];


const cssPaths = {
  fonts: "/public/css/fonts.css",
  loader:"/public/css/loader.css"
}

const initialState = { font_files: fontsToSelect, background_files, images, textProps: textProps, activeOptions, cert_background:'crown.jpg', cssPaths };



export default initialState;