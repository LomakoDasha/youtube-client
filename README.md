# YouTube client

[link to the app](https://LomakoDasha.github.io/youtube-client/dist)

Youtube-client - web app to view the information about youtube clips on user request.

### UI Examples:
#### Default view:
![youtube1](https://user-images.githubusercontent.com/42466442/68998196-4144ea80-08c0-11ea-805e-a4c825bd0822.png)

#### Resized window
![youtube2](https://user-images.githubusercontent.com/42466442/68998199-5752ab00-08c0-11ea-8b61-25d21aa958f9.png)

#### Mobile version
![youtube3](https://user-images.githubusercontent.com/42466442/68998203-65a0c700-08c0-11ea-8a6a-62bf1663f7df.png)

## Key points 
- HTML rendering via JavaScript (a page is loaded without html tags inside document.body);
- CSS3 Animations with Transitions & Transforms;
- Used `.editorconfig`;
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
