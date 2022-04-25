/**
 * @name YoutubeInDiscord
 * @description Watch YouTube videos without leaving Discord!
 * @author GEOEGII555
 * @authorId 848232374918578206
 */
class YoutubeInDiscord {
    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/GEOEGII555/BetterDiscordPlugins/master/YoutubeInDiscord.plugin.js");
    }

    stop() {

	}
}
