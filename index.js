//require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, IntentsBitField, GatewayIntentBits, messageLink, TextChannel } = require('discord.js');
const { token } = require('./config.json');
const { EmbedBuilder } = require('discord.js');
const { creatures } = require('./pikmin.js');



//let { result } = import('./modules/mc.js');





const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.DirectMessages,
    ] });


const british = ['!colour', '!color'];

const twtname = ['//x.com', '//twitter.com'];
const instaname = ['w.insta'];
var twt = []
var twt2 = []
var insta = []
var insta2 = []


var cron = require('node-cron');

const one = [' one', ' one '];

const hex0 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
const hex1 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
const hex2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
const hex3 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
const hex4 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]
const hex5 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ]

const bestieResp = ["Bestie", "Hey bestie", "My bestie"]

const pingResponces = ["So true bestie.", "What is bro on about!!🔥🔥🔥", "Nah you're on your own here.", "Suuuure.", "Real.", "Yuh uh.", "Nuh uh.", "Maybe.", "Fake...",
"So false worstie.", "That's great but have you ever played Portal?", "L", "Cope", "You had a rough transition into 3d.", "That's cool. Have you been charging your Nintendo Switch?", 
"They’ll never find your remains.", "Correct.", "The bombs have been planted", "https://cdn.discordapp.com/attachments/1143625460400525342/1146550188148801557/Tumblr_l_33405685395835.jpg",
"https://tenor.com/view/curse-of-ra-curse-of-ra-gif-10622361558915339590", "https://tenor.com/view/venom-meme-venom-disrespect-youre-treading-a-thin-line-i-dont-appreciate-the-disrespect-gif-256897852",
"https://cdn.discordapp.com/attachments/1143625460400525342/1148448981995761804/F45QJxcWEAEywuB.jpg", "https://media.discordapp.net/attachments/1063229606695551146/1108498013078425670/image0.gif", 
"https://cdn.discordapp.com/attachments/1143625460400525342/1143626335172960348/Tumblr_l_3865777702614.gif", "https://cdn.discordapp.com/attachments/1143625460400525342/1143626909863915600/IMG_0274.png",
"sure", "ok", "https://media.discordapp.net/attachments/910201042136891442/1110653943027081276/frye-frye-splatoon3.gif", "https://media.discordapp.net/attachments/910201042136891442/1110654015894728804/frye_what_the_flop.gif",
 ":3", "https://64.media.tumblr.com/51a849af1c0fe8501c7a49dd1a2880af/11f3df725c5a3789-82/s640x960/d2c9b48f9a1cd883f19e058abebb4daf907d709c.jpg", 
 "https://cdn.discordapp.com/attachments/1010946010442371072/1154856039531941948/wires.png", "https://cdn.discordapp.com/attachments/1010946010442371072/1154856357837680670/Deleted_Scenes_-_Scott_The_Woz_Seasons_1-5_3-17_screenshot.png", 
"https://cdn.discordapp.com/attachments/1010946010442371072/1154856537479721010/image_10.png" /*rotor*/, "https://cdn.discordapp.com/attachments/1010946010442371072/1154857438168752308/image.png",
"I am in your walls", "You smell", "Sparkle on! It's Wednesday! Don't forget to be yourself!", "Sparkle off. It's Thursday. Forget who you are.", 
 "Delicious", "[INCORRECT BUZZER NOISE]", "[CORRECT BUZZER NOISE]", "https://tenor.com/view/realizing-everyone-knows-what-you-did-hatsune-miku-anime-vocaloid-gif-17298714", 
  ]

const pingResponcesPos = ["So true bestie.", "Real.", "Yuh uh.", "Correct.",
"https://cdn.discordapp.com/attachments/1143625460400525342/1143626335172960348/Tumblr_l_3865777702614.gif", "https://media.discordapp.net/attachments/1063229606695551146/1108498013078425670/image0.gif",
"sure", "ok", "https://media.discordapp.net/attachments/910201042136891442/1110653943027081276/frye-frye-splatoon3.gif", "https://media.discordapp.net/attachments/910201042136891442/1110654015894728804/frye_what_the_flop.gif",
":3", "https://64.media.tumblr.com/51a849af1c0fe8501c7a49dd1a2880af/11f3df725c5a3789-82/s640x960/d2c9b48f9a1cd883f19e058abebb4daf907d709c.jpg",
 "https://cdn.discordapp.com/attachments/1010946010442371072/1154856039531941948/wires.png", "Sparkle on! It's Wednesday! Don't forget to be yourself.!",
 "Delicious", "[CORRECT BUZZER NOISE]", ]

const triggerWords2 = ['silksong'];
const triggerWords = ['switch', 'gonna play botw', 'gonna play splat', 'gonna play totk', 'gonna play pokemon', 'gonna play sv',
'gonna shiny hunt',  'play splatoon', 'play botw', 'play totk', 'play pokemon', 'playing botw', 'playing splatoon'];

var oneoptout = ['447540015853993985', '569334763685412884', '434792370010324994'];


const respUpdate = [`\n`];
client.on('ready', (c) => {
    var testChannel = client.channels.cache.find(channel => channel.id === '1192230028142981141')
    var updateChannel = client.channels.cache.find(channel => channel.id === '1143625460400525342')
    var pingDuke = client.channels.cache.find(channel => channel.id === '1140718716544368770')
    var bnbannou = client.channels.cache.find(channel => channel.id === '668169521353326594')
    
    var MINECRAFT = client.channels.cache.find(channel => channel.id === '1207124950528295002')
	
    var ventchat = client.channels.cache.find(channel => channel.id === '1248152057995853866')
	

    console.log(`${c.user.tag} is up and running ✅✅✅`);
    console.log(`

                                                +=-::::-=                                           
                                             =-*..........:=                                        
                                           =:..=:...........:-  **                                  
                                         =:.....*.............:=%                                   
                                    *   -.......=:.............:*                                   
                                     %=:.........*.............#.:=                                 
                                    =-=-....:*#+-:::-+*=:.....*-..:=                                
                                   -....=%#:.......::.....:+-+-.....-+                              
                                 =:....=*.....:%+.......*-.....*:....:=                             
                               =:.....*:....%@*:::::::....:#.....:=...:-                            
                             +-......#....@@@@=-----::::::::-+.....#....-+                          
                            -.......#....@@@@@*======------:::%....-+....:=                         
                          -:.......+:...=@@@@@@@+++++======---+-...:*......:=                       
                        -:....:::::*....=@@@@@@@@@@@@@@@@@@@@@@-...-+.:::....-=                     
                     =-:.....:-----*.....@@@@@@@@@@@@@@@@@@@@@#....#-----::....-=                   
                    -:......:-------*.....#@@@@@@@@@@@@@@@@@@=....*+-------::...:-                  lalalala
                  -:......+.:--------=......%@@@@@@@@@@@@@@-.....*+---------:.....:-                
                =:........=..::-----::=.......:+%@@@@%*-........#=::--=------.......:=              
               -.........*....:*::::...+......................:%:...::+::::.+.........-             
              =:........*.+..=.#.........+..................+%:......:=.%.=:*:::::....-             
              =:.....:...:.==:+::::........:*-........:=#%*:..........+#-:.....:..:*#*##            
           #*-----*+.:::..........:......:::::::::--::::::::::::.:.......=#%#%:-#-------+*          
          *#-------+*----*-.......:..............:...............:..:*%=-------%--------=#          
           #-------#--------=**+==+*#%#++++*#-:::::===:::::-::::-#*=-----------=*-------%           
           *+------*-------------------------+-..#------------------------------%-----**            
             #-----#--------------------------+..+------------------------------*-=+*##*            
             %+=*+-=-------------------------+*++#--------------------------+#+---------+*          
          *+--------#--===++*++++++++++***++=%    *=----------===+****++=%=-----------=***          
        ***:+=---------*:::::::::::::-+++=:::**    %:::::::::::::::::::=---------=*+...=+----**     
    *#-----*...++--------#:::::::::=:-=..=:+:-#   **:::--.....:=:::::::*------*+:::-#----------=*   
   #*--------+=:::*+------=:::::::-...::.-..+:%   #=::=..=...=..+:::::::+*#*::::::*---------*:...#  
 *+...=*-------*::::=#---#::::::::+....:.-..+:**  %-:::..=..=-..::::::::::::::::::*------*-+......% 
#.......:%------+::::::::::::::::::=..=-..==::+*  %:::=.-=...:..+::::::::::::::::::=##*-:::::-....% 
#......-::-#=-=#:::::::::::::::::::::-=-=+-::=#   %-:::-=.....+-:::::::::::::::::::::::::::::-:+=..#
*+....:::::::::::::::::::::::::::::::---==+=:.++  *+*--:::::::::::::::::::::::::::::--=+**=:.......*
:...:+*+=---::::::----=++**+-:................+*  %.............................-...............+@% 
+...................:.................:=*%@        %@@%*=-:.....................-......-=*%         
 *#=:..............:+:-=+*##%@                                                                      

`);
    /*updateChannel.send('```update log\n added stickers commands```' );
    updateChannel.send(`stickers\n :ghotiboo:\n :ghotiwatch:\n :blubbwin:\n :blubbsleep:`);
    */
    //bnbannou.send('hello.\nas you have noticed saying "one" has me react with the emote "<:ONE:1220830334048927905>"\nthis system is currently _not_ opt-in/opt-out, as <@434792370010324994> is kind of dumb they are unsure how to connect it to a role as of now\nhowever, you can react to **this** message and he will manually opt you out of being reacted (just for this function not all)\nthank you\n \nTLDR: **react here to opt out of being <:ONE:1220830334048927905> reacted**');
/*
    setInterval(() => {
        testChannel.send('<@789998286324760608> CHARGE YOUR SWITCH!!!!! 💥💥💥💥💥💥💥');
        testChannel.send('https://cdn.discordapp.com/attachments/1063216465894985862/1100861811777081504/Untitled2831.png')
    }, 3600000);
*/


/*  cron works in ('SECOND MINUTE HOUR DAYOFMONTH MONTH DAYOFWEEK') second cannot be *. * means every */

	cron.schedule('0 30 13 * * *', () => {
  		testChannel.send('<@789998286324760608> TAKE YOUR MEDS 💥💥💥💥💥💥💥');
	});
    
    /*setInterval(() => {
   //     pingDuke.send('YOU.');
   //     pingDuke.send('<@410529171954204672>')
        
   // }, 1000 * 60 * 60 * 24);

    pingDuke.send('you will be pinged 24 hours from now and maybe 48 if i forget');
    */
});





client.on('messageCreate', async (message) => {
    if (message.author.bot) {
        return;
    }

    if(message.author.id === '569334763685412884') {
	return;
}



    if (message.channel.id === '1248152057995853866') {
        return;
}

//twt convert
    twtname.forEach((word) => {
    if (message.content.toLowerCase().includes(word)) {

        twt = message.content
        twt2 = twt.replace(word, "//fxtwitter.com")
        user = message.author
        message.delete()
        console.log(`${twt} replaced with ${twt2}`)
        message.channel.send(`${twt2} via ${user}`);
    }})

//insta convert
    instaname.forEach((word) => {
    if (message.content.toLowerCase().includes(word)) {

        insta = message.content
        insta2 = insta.replace(word, "w.ddinsta")
        user = message.author
        message.delete()
        console.log(`${insta} replaced with ${insta2}`)
        message.channel.send(`${insta2} via ${user}`);
    }})



    if (message.content.toLowerCase() === '!mc') {
        const {result2} = await import('./modules/mc.js');

        //const result = {result2}
        const mcEmbed = new EmbedBuilder()
         mcEmbed.setDescription(`a${result2}`)
        
        message.channel.send({ embeds: [mcEmbed] });
        console.log(result2)

    }
    
    
//stickers
    if (message.content.toLowerCase() === ':ghotiboo:') {
        message.reply('https://cdn.discordapp.com/attachments/448239931660435489/1174361490233499700/ghoti_sticker.png?ex=6567505d&is=6554db5d&hm=9a20fe908cdc40460eaaf716c42e8b6d6d394019b1c696f90d13dccb27c0e8a6&')
    }
    if (message.content.toLowerCase() === ':ghotiwatch:') {
        message.reply('https://cdn.discordapp.com/attachments/448239931660435489/1174361489956679802/ghoti_sticker2.png?ex=6567505d&is=6554db5d&hm=29928e7b2a8c76dd8c89331b7b911cbbad110682585dd05821b7582433f87205&')
    }
    if (message.content.toLowerCase() === ':blubbwin:') {
        message.reply('https://cdn.discordapp.com/attachments/448239931660435489/1174361489717612584/blubble_marble.png?ex=6567505d&is=6554db5d&hm=84ec250fb8f3a3ec0a7874c4798b7d795db8327e25769fed7e35b97e3f59bea8&')
    }
    if (message.content.toLowerCase() === ':blubbsleep:') {
        message.reply('https://cdn.discordapp.com/attachments/448239931660435489/1174361489407221910/bubble_sleep.png?ex=6567505d&is=6554db5d&hm=c3622c0b926c59038d46f6b458032f4efc05975fbd8a38929a24baabbd476285&')
    }

    if (message.content.toLowerCase() === 'overwatch gif') {
        message.channel.send('https://tenor.com/view/mercy-overwatch-come-here-gif-14280244')
    }
    
    // updatethread cmd
    if (message.content.toLowerCase() === '!updates') {
        message.channel.send('<#1143625460400525342>')
    }

    if (message.content.toLowerCase() === 'blockedmessage') {
        message.channel.send('https://tenor.com/view/bulbmin-pikmin-pikmin2-thebulbmin-one-blocked-message-gif-27043115')
    }


    if (message.content.toLowerCase().includes('wyatt in 2024')) {
        message.channel.send('https://tenor.com/view/house-explosion-explode-boom-kaboom-gif-19506150')
    }

    if (message.content.toLowerCase().includes('wyatt')) {
        message.react('💥');
    }
    
    if (message.content.toLowerCase().includes('<@&1218666421706424341>')) {
        message.channel.send('https://tenor.com/view/dead_watermelon-gif-25762890');
    }

    if (message.content.toLowerCase() === ('bfdi')) {
	message.channel.send('https://cdn.discordapp.com/attachments/448239931660435489/1231525980779184229/bfdi_rapping.mp4?ex=663746f2&is=6624d1f2&hm=9f47ac09d9394769dcc5285227b54db44f9bb0a6adbffa644ae1efa2bd984424&');
    }



    one.forEach((word) => {
    if (message.content.toLowerCase().includes(word)) {
	if (message.member.roles.cache.some(role => role.name === 'One Opt Out')) {
	return; 
	} else {
	message.react('<:ONE:1220830334048927905>');
}}
});

    triggerWords2.forEach((word) => {
        if (message.content.toLowerCase().includes(word)) {
            message.react('🤡');
        }
        }) 

if (message.content.toLowerCase() === 'fan gif') {
        message.reply('https://cdn.discordapp.com/attachments/1063198979778691122/1231687503485075517/fan_spoingbob.gif?ex=6637dd60&is=66256860&hm=1315f87860e1996c1bc53da4dc14203731d247324a4f74296619c1481fb7702f&')
    }

 if(message.author.id != '580414474952114186') {
    if (message.content.toLowerCase() === 'my switch died') {
        message.react('💥');
        message.reply('https://tenor.com/view/look-what-you-fucking-did-gif-25579294');
    }
 };



 if(message.author.id === '257227308643909632') {
    if (message.content.includes('<@1096057147525185536>')) {
        if (message.content.toLowerCase().includes('money')) {
            message.channel.send('@here give kuru your money')
        }
        else
        if (message.content.toLowerCase().includes('pikmin')) {
            message.reply('I LOVE PIKMIN!!!!')
        }
        else{
        if (message.content.toLowerCase().includes('bestie')) {
        const pingResponcesPosIndex = Math.floor(Math.random() * pingResponcesPos.length);
        const bestieRespIndex = Math.floor(Math.random() * bestieResp.length);
        message.reply(`${bestieResp[bestieRespIndex]} ${pingResponcesPos[pingResponcesPosIndex]}`)  
        }
        else{
        const pingResponcesPosIndex = Math.floor(Math.random() * pingResponcesPos.length);
        message.reply(pingResponcesPos[pingResponcesPosIndex])   
        };
    }}
 };

 if(message.author.id != '257227308643909632') {
    if (message.content.includes('<@1096057147525185536>')) {
        if (message.content.toLowerCase().includes('pikmin')) {
            message.reply('I LOVE PIKMIN!!!!')
        }
        else{
        if (message.content.toLowerCase().includes('bestie')) {
        const pingResponcesIndex = Math.floor(Math.random() * pingResponces.length);
        const bestieRespIndex = Math.floor(Math.random() * bestieResp.length);
        message.reply(`${bestieResp[bestieRespIndex]} ${pingResponces[pingResponcesIndex]}`) 
        }
        else{
        const pingResponcesIndex = Math.floor(Math.random() * pingResponces.length);
        message.reply(pingResponces[pingResponcesIndex])   
        };
    }}
 };

  /*  if (message.content.includes('<@935962967445491762>')) {
        const index = Math.floor(Math.random() * explode.length);
      message.channel.send(explode[index]); 
    } */
    
        if (message.content.toLowerCase() === '!ranenemy') {
            const creaturesIndex = Math.floor(Math.random() * creatures.length);
            message.reply(`https://www.pikminwiki.com/${creatures[creaturesIndex]}`);
            console.log(`generated creature`);
        }

    british.forEach((word) => {
    if (message.content.toLowerCase().includes(word)) {
        const hex0Index = Math.floor(Math.random() * hex0.length);
        const hex1Index = Math.floor(Math.random() * hex1.length);
        const hex2Index = Math.floor(Math.random() * hex2.length);
        const hex3Index = Math.floor(Math.random() * hex3.length);
        const hex4Index = Math.floor(Math.random() * hex4.length);
        const hex5Index = Math.floor(Math.random() * hex5.length);
        const colourgen = [ `${hex0[hex0Index]}${hex1[hex1Index]}${hex2[hex2Index]}${hex3[hex3Index]}${hex4[hex4Index]}${hex5[hex5Index]}` ]
        const exampleEmbed = new EmbedBuilder()
        exampleEmbed.setColor(`${colourgen}`);
        exampleEmbed.setTitle(`your colour is #${colourgen}`);
        console.log(`colour made #${colourgen}`);
        message.channel.send({ embeds: [exampleEmbed] });
    }
})


    //TEST
        if(message.content.includes('<@935962967445491762>')) {
           var boomcount = "💥".repeat(Math.random().toString().substr(2, 1))
           console.log(boomcount);
            if (boomcount.includes('💥')) {
                console.log(`boom success!`)
                message.channel.send(boomcount);
            } else {
                console.log(`boomfail`);
                message.channel.send('Sorry, bomb supply ran out.');
            }

        }
    

    if(message.author.id === '580414474952114186') {
        
        if (message.content.toLowerCase() === 'my switch died') {
            message.react('💥');
            message.reply('https://tenor.com/view/look-what-you-fucking-did-gif-25579294')
        }else

        triggerWords.forEach((word) => {
            if (message.content.toLowerCase().includes(word)) {
                message.reply('REMEMBER TO CHARGE YOUR SWITCH GRAHHHHH💥💥💥💥💥💥💥💥');
            }
        });

        if (message.content.toLowerCase() === 'nuh uh') {
            message.reply('fuck you')
        }
    
    };




});

//https://discord.com/developers/applications/1096057147525185536/bot
//client.login(process.env.TOKEN);
client.login(token);