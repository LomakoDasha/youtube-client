# YouTube client

[link to the app](https://LomakoDasha.github.io/youtube-client/)

Youtube-client - web app to view the information about youtube clips on user request.

### UI Examples:
#### Default view:

#### Resized window

#### Mobile version

## Key points 
- HTML rendering via JavaScript (a page is loaded without html tags inside document.body);
- CSS preprocessors can be used; 
- CSS3 Animations with Transitions & Transforms;
- Use of jQuery and other frameworks and libs **is forbidden** (except for https://lodash.com/);
-  Used `.editorconfig`;
- Used `eslint`;
- Used `eslint-config-airbnb-base`;
- JS code split into modules and assembled by Webpack. Used babel and babel-loader; 
- Each clip-component provide the following information about a single YouTube clip:
    - title (includes a clickable link to YouTube)
    - clip preview as a picture
    - video description
    - author (channel name)
    - upload date
    - view count
