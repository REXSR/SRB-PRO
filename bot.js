 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Great. Games`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));

client.on('message', message => {

    if (!points[message.author.id]) points[message.author.id] = {points : 0}

    if (message.content == 'نقاطي'){

        var embed = new RichEmbed()

        .setAuthor(message.author.username,message.author.avatarURL)

        .addField(`نقاطك : ${points[message.author.id].points}`,'By : Xivo',   true)

        .setColor('RANDOM')

        .setFooter('العاب وبس', client.user.avatarURL);

        message.channel.sendEmbed(embed)

    };

    if (message.content == "فكك") {    

        var x = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];

        var x2 = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`فكك الكلمة الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

            points[message.author.id].points +=1

            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب

 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

	    if (message.content == "ركب") {    

        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];

		var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

            points[message.author.id].points +=1

            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب

 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

	    if (message.content == "رياضيات") {    

        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44,5+44,5'];

		var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`ركب الكلمة  الآتية :${x[x3]}, لديك 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

            points[message.author.id].points +=1

            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب

 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

	

  if (message.content == "عواصم") {

        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];

        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`ماهي عاصمة :${x[x3]}, لديك 15 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1, 

                time : 15000, 

                errors : ['time'] 

            })

        r.catch(() => {

            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 

               message.channel.sendEmbed(embed)

        })

        r.then(s=> {

            points[message.author.id].points +=1

            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب

 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

    if (message.content == "لغز") {

        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];

        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`حل اللغز الأتي :${x[x3]}, لديك 20 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 20000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح') 

               message.channel.sendEmbed(embed)

        })

        r.then(s=> {

            points[message.author.id].points +=1

            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب

 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    })

  if (message.content == "تحدي") {    

        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];

        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];

        var x3 = Math.floor(Math.random()*x.length)

        message.channel.send(`عدل الكلمة  الآتية :${x[x3]}, لديك 25 ثانية`).then(msg1=> {

            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {

                maxMatches : 1,

                time : 25000,

                errors : ['time']

            })

        r.catch(() => {

            return message.channel.send('❌ لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح')

                    message.channel.sendEmbed(embed)

        })

        r.then(s=> {

            points[message.author.id].points +=1

            message.channel.send(`✅ لقد قمت بكتابة الجواب الصحيح بالوقت المناسب

 ─═════**{نقاطك:${points[message.author.id].points}}**═════─`);

               message.channel.sendEmbed(embed)

        })

        })

    }

    fs.writeFile('points.json', JSON.stringify(points), (err) => {

        if (err) console.error(err);

    });








	
	
	
	
	
	
	
	
	
	
	
client.login(process.env.BOT_TOKEN);
