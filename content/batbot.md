Team: Solo
Type: Discord Bot
Timeline: June 2019 - November 2022
Tech: C# / Discord API / Twitch API

In 2019, I created a Discord bot for the Batman Arkham speedrunning community, used to automatically announce when a known speedrunner was currently streaming one of the Batman: Arkham games. Previously the community relied a different bot for this, but in 2019 that bot was was shut down for long-term maintenance with no clear timeline for if/when it would return, so we decided to replace it with our own creation.

The core functionality was pretty straightforward:
* Call the Twitch API to see which streamers are live for a pre-defined set of games
* Cross-reference with a user-defined list of streamers
* If one of the streamers on the list is live, announce it in a user-defined Discord channel.

Unfortunately, my knowledge and experience with multithreading and web APIs was extremely limited at the time, and as a result, the bot was moderately unstable. The issue became exacerbated by the limited cloud compute it was running on and changes to the API behaviour over time. The next 2 or so years were spent attempting to improve the stability with limited success, as I was unable to address the underlying issues without a full rewrite that I was unwilling and unable to perform.

Despite these issues, the bot was used for several years, and the community was relatively happy with it. Maintenance continued until December 2021. The bot was ultimately shut down and officially deprecated in 2022 both due to the stability issues, and because of logistical challenges with 24/7 hosting on a tight budget.

The [archived GitHub repository is available here](https://github.com/ShikenNuggets/Batbot).