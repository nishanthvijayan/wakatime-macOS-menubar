# wakatime-tracker
MacOS menu bar app that shows how many hours you've coded today (tracked using Wakatime).

![Screenshot](ScreenShot.png)

## Setup

This guide assumes that you're already a Wakatime user.  

  
1. Install [BitBar](https://getbitbar.com/)
  
2. Clone this repo
  
3. Get your Api key from Wakatime.  
You can get your API key from the [your Wakatime settings page](https://wakatime.com/settings/account)    
  
4. Rename `secrets.example.json` to `secrets.json` and enter your API key & userID in that file.  
  
5. Install dependencies & build
```
npm install
npm run build
```
  
A new folder named `dist/` would now appear. Inside `dist/` you'll find `wakatime.5m.js`  
  
  
6. Change permissions of `wakatime.5m.js` to make it executable
```
chmod +x wakatime.5m.js
```  
  
  
7. Drop wakatime.5m.js in your BitBar plugins folder.  
If you don't already have one, create a new folder anywhere and drop the script there.  
Once you've launched BitBar, you can set this new folder as the plugins folder by selecting the `Change Plugins Folder`   
  
  
  
8. Start BitBar using finder.
  
Done!
  
