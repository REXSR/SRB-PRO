const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#g';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'games') {
    msg.reply('ارحبء ياعيني!');
  }
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **كت تويت** ' , '**لعبة الكت تويت**')
.addField('     ** عقاب** ' ,' **لعبة عقاب** ')
.addField('     **صراحه ** ' ,' **لعبة صراحه** ')
.addField('     **خواطر** ' ,' **لعبة خواطر** ')
.addField('     **حب** ' ,' **لعبة حب** ')
.addField('     **مريم** ' ,' **لعبة مريم** ')
.addField('     **قرعه** ' ,' **لعبة القرعه** ')
.addField('     **حكم** ' ,' **لعبة حكم** ')
     .setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});





















const Sra7a = [

     'صراحه  |  صوتك حلوة؟',

     'صراحه  |  التقيت الناس مع وجوهين؟',

     'صراحه  |  شيء وكنت تحقق اللسان؟',

     'صراحه  |  أنا شخص ضعيف عندما؟',

     'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',

     'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',

     'صراحه  |كيفية الكشف عن من يكمن عليك؟',

     'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',

     'صراحه  |أشجع شيء حلو في حياتك؟',

     'صراحه  |طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',

     'صراحه  |كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',

     'صراحه|التغيير العادي عندما يكون الشخص الذي يحبه؟',

     'صراحه|المواقف الصعبة تضعف لك ولا ترفع؟',

     'صراحه|نظرة و يفسد الصداقة؟',

     'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',

     'صراحه  |شخص معك بالحلوه والمُره؟',

     'صراحه  |‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',

     'صراحه  |تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',

     'صراحه  |وش تتمنى الناس تعرف عليك؟',

     'صراحه  |ابيع المجرة عشان؟',

     'صراحه  |أحيانا احس ان الناس ، كمل؟',

     'صراحه  |مع مين ودك تنام اليوم؟',

     'صراحه  |صدفة العمر الحلوة هي اني؟',

     'صراحه  |الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',

     'صراحه  |صفة تحبها في نفسك؟',

     'صراحه  |‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',

     'صراحه  |تصلي صلواتك الخمس كلها؟',

     'صراحه  |‏تجامل أحد على راحتك؟',

     'صراحه  |اشجع شيء سويتة بحياتك؟',

     'صراحه  |وش ناوي تسوي اليوم؟',

     'صراحه  |وش شعورك لما تشوف المطر؟',

     'صراحه  |غيرتك هاديه ولا تسوي مشاكل؟',

     'صراحه  |ما اكثر شي ندمن عليه؟',

     'صراحه  |اي الدول تتمنى ان تزورها؟',

     'صراحه  |متى اخر مره بكيت؟',

     'صراحه  |تقيم حظك ؟ من عشره؟',

     'صراحه  |هل تعتقد ان حظك سيئ؟',

     'صراحه  |شـخــص تتمنــي الإنتقــام منـــه؟',

     'صراحه  |كلمة تود سماعها كل يوم؟',

     'صراحه  |**هل تُتقن عملك أم تشعر بالممل؟',

     'صراحه  |هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',

     'صراحه  |متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',

     'صراحه  |ما هو اسوأ خبر سمعته بحياتك؟',

     '‏صراحه |هل جرحت شخص تحبه من قبل ؟',

     'صراحه  |ما هي العادة التي تُحب أن تبتعد عنها؟',

     '‏صراحه |هل تحب عائلتك ام تكرههم؟',

     '‏صراحه  |من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',

     '‏صراحه  |هل خجلت من نفسك من قبل؟',

     '‏صراحه  |ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',

     '‏صراحه  |ما هو الشخص الذي تحلم به كل ليلة؟',

     '‏صراحه  |هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',

     '‏صراحه  | هل حياتك سعيدة أم حزينة؟',

     'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',

     '‏صراحه  |  ما هو عمرك الحقيقي؟',

     '‏صراحه  |  ما اكثر شي ندمن عليه؟',

	 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',

]

   client.on('message', message => {

       if (message.author.bot) return;

 if (message.content.startsWith('#gصراحه')) {

     if(!message.channel.guild) return message.reply('** This command only for servers **');

  var client= new Discord.RichEmbed()

  .setTitle("لعبة صراحة ..")

  .setColor('RANDOM')

  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)

  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")

                  .setTimestamp()

   message.channel.sendEmbed(client);

   message.react("??")

 }

});

const Za7f = [

    "**صورة وجهك او رجلك او خشمك او يدك**.",

    "**اصدر اي صوت يطلبه منك الاعبين**.",

    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",

    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",

    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",

    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",

    "**ذي المرة لك لا تعيدها**.",

    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",

    "**صور اي شيء يطلبه منك الاعبين**.",

    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",

    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",

    "**سو مشهد تمثيلي عن مصرية بتولد**.",

    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",

    "**ذي المرة لك لا تعيدها**.",

    "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",

    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",

    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",

    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",

    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",

    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",

    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",

    "**اتصل على امك و قول لها انك تحبها :heart:**.",

    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",

    "**قل لواحد ماتعرفه عطني كف**.",

    "**منشن الجميع وقل انا اكرهكم**.",

    "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",

    "**روح المطبخ و اكسر صحن او كوب**.",

    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",

    "**قول لاي بنت موجود في الروم كلمة حلوه**.",

    "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",

    "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",

    "**قول قصيدة **.",

    "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",

    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",

    "**اول واحد تشوفه عطه كف**.",

    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",

    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",

    "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",

    "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",

    "**تاخذ عقابين**.",

    "**قول اسم امك افتخر بأسم امك**.",

    "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",

    "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",

    "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",

    "**تتصل على الوالده  و تقول لها خطفت شخص**.",

    "** تتصل على الوالده  و تقول لها تزوجت با سر**.",

    "**����تصل على الوالده  و تقول لها  احب وحده**.",

      "**تتصل على شرطي تقول له عندكم مطافي**.",

      "**خلاص سامحتك**.",

      "** تصيح في الشارع انا  مجنوون**.",

      "** تروح عند شخص تقول له احبك**.",

  

]

 client.on('message', message => {

     

     if (message.author.bot) return;

   if (message.content.startsWith("#gعقاب")) {

                if(!message.channel.guild) return message.reply('** This command only for servers**');

  var embed = new Discord.RichEmbed()

  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 

 .addField('Great games' ,

  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)

  message.channel.sendEmbed(embed);

  console.log('[38ab] Send By: ' + message.author.username)

    }

});


var rebel = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]

    client.on('message', message => {

        if (message.author.bot) return;

        var args = message.content.split(" ").slice(1);

    if(message.content.startsWith(prefix + 'لو خيروك')) {

         var cat = new Discord.RichEmbed()

.setImage(rebel[Math.floor(Math.random() * rebel.length)])

message.channel.sendEmbed(cat);

    }

});

 const cuttweet = [

     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',

     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',

     'كت تويت | الحرية لـ ... ؟',

     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',

     'كت تويت ‏| كلمة للصُداع؟',

     'كت تويت ‏| ما الشيء الذي يُفارقك؟',

     'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',

     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',

     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',

     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',

     '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',

     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',

     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',

     '‏كت تويت | وش يفسد الصداقة؟',

     '‏كت تويت | شخص لاترفض له طلبا ؟',

     '‏كت تويت | كم مره خسرت شخص تحبه؟.',

     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',

     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',

     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',

     '‏كت تويت |أقوى كذبة مشت عليك ؟',

     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',

     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',

     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',

     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',

     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',

     '‏كت تويت | مطلبك الوحيد الحين ؟',

     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',

]

 client.on('message', message => {

     if (message.author.bot) return;

   if (message.content.startsWith("#gكت تويت")) {

                if(!message.channel.guild) return message.reply('** This command only for servers**');

  var embed = new Discord.RichEmbed()

  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 

 .addField('لعبه كت تويت' ,

  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)

  message.channel.sendEmbed(embed);

  console.log('[id] Send By: ' + message.author.username)

    }

});

const secreT = [

  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",

  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",

  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",

  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",

  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 

  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 

  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 

  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 

  "**المناقشات العقيمة لا تنجب افكارا**.", 

  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 

  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 

]

 client.on('message', message => {

     if (message.author.bot) return;

   if (message.content.startsWith("#gخواطر")) {

                if(!message.channel.guild) return message.reply('** This command only for servers**');

  var embed = new Discord.RichEmbed()

  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 

 .addField('لعبه خواطر' ,

  `${secreT[Math.floor(Math.random() * secreT.length)]}`)

  message.channel.sendEmbed(embed);

  console.log('[id] Send By: ' + message.author.username)

    }

});

const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]

 client.on('message', message => {

     if (message.author.bot) return;

   if (message.content.startsWith("#gحب")) {

                if(!message.channel.guild) return message.reply('** This command only for servers**');

  var embed = new Discord.RichEmbed()

  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 

 .addField('لعبة حب' ,

  `${Love[Math.floor(Math.random() * Love.length)]}`)

  message.channel.sendEmbed(embed);

  console.log('[id] Send By: ' + message.author.username)

    }

});

console.log('mariam ra7t tmot al nas');

client.on('ready', () => {

  console.log(`im redey`);

});

const zead = [

   '*** انا اسمي مريم ***',

   '*** مرحباَ ماهو اسمك ؟ ***',

   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,

   '*** هل تود مساعدتي ؟ ***',

   '*** لماذا هل انت قاسي القلب ؟ ***',

   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',

   '*** ابتعد عني قليل انني متعبة ***',

   '*** هل انت نادم على ماقلت ؟ ***',

   '*** ابتعد عني قليل انني متعبة ***',

   '*** هل انت نادم على ماقلت ؟ ***',

   '*** هل تود مساعدتي ؟ ***',

   '*** واو اشكرك انك شخصاَ رائع ! ***',

   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',

   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',

   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',

   '*** هيا اذاَ ***',

   '*** اود ان اسئلك سؤال ونحن في الطريق ***',

   '*** هل تراني فتاة لطيفة ام مخيفة ***',

   '*** اشكرك !  ***',

   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',

   '*** هل انت جاهز ؟ ***',

   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',

   '*** هل تود ان تراهم الان ***',

'*** انا لست الحوت الازرق كما يدعون ***',

   '*** انا لست كاذبة صدقني***',

   '*** لماذا ارى في عينيك الخوف ؟ ***',

   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',

   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',

   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',

   '*** لماذا لم تدخل الغرفة ؟ ***',

   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',

   '*** لن تخرج حتى اعود لك بعد قليل ***',

   '*** المفتاح معك ! اكتب .مريم  ***',

   '*** مفتاح احمر , هل حصلت عليه ؟ ***',

   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',

   '*** مفتاح اسود . هل حصلت عليه ؟ ***',

   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',

   '*** لقد عادت من جديد الى المنزل ***',

   '*** لا تصدر اي صوت ! ***',

   '*** مريم : لقد عدت ***',

   '*** مريم : يا ايها المخادع اين انت ***',

   '*** مريم : اعلم انك هنا في المنزل ***',

   '*** مريم : ماذا تريد ان تسمع ***',

   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',

   '*** احد ما خرج من المنزل ***',


]

 client.on('message', message => {

     if (message.author.bot) return;

 if (message.content.startsWith('#gمريم')) {

  var mariam= new Discord.RichEmbed()

  .setTitle("لعبة مريم ..")

  .setColor('RANDOM')

  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)

  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")

   message.channel.sendEmbed(mariam);

   message.react("??")

  }

});

client.on('message', function(message) {

  var prefix = '#g';

  if (message.author.bot) return;

    if(message.content.startsWith(prefix + 'قرعه')) {

        let args = message.content.split(" ").slice(1);

        if (!args[0]) {

            message.channel.send('حط رقم معين يتم السحب منه');

            return;

            }

    message.channel.send(Math.floor(Math.random() * args.join(' ')));

            if (!args[0]) {

          message.edit('1')

          return;

        }

    }

});

const kingmas = [

   '*** منشن الجميع وقل انا اكرهكم. ***',

'*** اتصل على امك و قول لها انك تحبها :heart:. ***',

   '***     تصل على الوالده  و تقول لها  احب وحده.***',

   '*** تتصل على شرطي تقول له عندكم مطافي.***',

   '*** صور اي شيء يطلبه منك الاعبين.***',

   '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',

   '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',

   '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',

   '***  تروح عند شخص تقول له احبك. ***',

   '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',

   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',

   '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',

   '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',

   '*** ذي المرة لك لا تعيدها.***',

   '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',

   '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',

   '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',

   '***سو مشهد تمثيلي عن مصرية بتولد.***',

   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',

   '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',

   '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',

   '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',

   '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',

   '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'

]

 client.on('message', message => {

   var prefix = '#g';

   if (message.author.bot) return;

 if (message.content.startsWith(prefix + 'حكم')) {

  var mariam= new Discord.RichEmbed()

  .setTitle("لعبة حكم ..")

  .setColor('RANDOM')

  .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)

   message.channel.sendEmbed(mariam);

   message.react(":thinking:")

  }

});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
  if(!message.guild) return;
    let id = message.author.id,prefix="#g";
    if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
        let r = (new Date).getTime() - spee[id];
        r = 15*1000 - r;
    message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
    return;
    }
    if ( message.content == prefix+'speed'){
       
        try{
}catch(e){
 
}
 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
 
 
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {  
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**Game is Start now...!**').then(msg => {
 
 const embed = new Discord.RichEmbed()
 .setColor("0054dd")
     .setAuthor(`⏳ |You have »15« seconds to type the word`)
          .setImage(`${item.type}`)
 .setFooter(`${message.author.tag}`, message.author.avatarURL)
 
 
         
msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
                  const sh = new Discord.RichEmbed()
  .setColor("04791c")
  .setDescription('**✅ |Good Job +1P**')
   .setFooter(`${collected.first().author}`)
  message.channel.sendEmbed(sh);
            let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
            points[won.id].points++;
          })
          .catch(collected => { // في حال لم يقم أحد بالإجابة
            message.channel.send(`🔚 |**Time Is End**`);
          })
        })
    })
    spee[id] = (new Date).getTime()
}
});


[
    {
        "type": "القسطنطينية",
        "answers": ["القسطنطينية"]
    },
    {
        "type": "طبق رطب مرق بقر",
        "answers": ["طبق رطب مرق بقر"]
    },
    {
        "type": "خشبات الحبس حبست خمس خشبات وخشبه",
        "answers": ["خشبات الحبس حبست خمس خشبات وخشبه"]
    },
    {
        "type": "خيط حرير على حيط خليل",
        "answers": ["خيط حرير على حيط خليل"]
    },
    {
        "type": "البرازيل",
        "answers": ["البرازيل"]
    },
    {
        "type": "ليوبليانا",
        "answers": ["ليوبليانا"]
    },
    {
        "type": "عطوني غداي وغطو غداء عطيه",
        "answers": ["عطوني غداي وغطو غداء عطيه"]
    },
    {
        "type": "لحم الحمام حلال ولحم الحمار حرام",
        "answers": ["لحم الحمام حلال ولحم الحمار حرام"]
    },
    {
        "type": "السعودية",
        "answers": ["السعودية"]
    },
    {
        "type": "سهله مو صعبه",
        "answers": ["سهله مو صعبه"]
    },
    {
        "type": "سوبراشي",
        "answers": ["سوبراشي"]
    },
    {
        "type": "كونيتشوا",
        "answers": ["كونيتشوا"]
    },
    {
        "type": "تفكيك",
        "answers": ["تفكيك"]
    },
    {
        "type": "بدون اسم",
        "answers": ["بدون اسم"]
    },
    {
        "type": "كيف حالك",
        "answers": ["كيف حالك"]
    },
    {
        "type": "اسبانيا",
        "answers": ["اسبانيا"]
    },
    {
        "type": "مدريد",
        "answers": ["مدريد"]
    },
    {
        "type": "اوهايو",
        "answers": ["اوهايو"]
    },
    {
        "type": "تيستا لاغوسا",
        "answers": ["تيستا لاغوسا"]
    },
    {
        "type": "ماسكد مان",
        "answers": ["ماسكد مان"]
    },
    {
        "type": "جزر القمر",
        "answers": ["جزر القمر"]
    },
    {
        "type": "النهاية",
        "answers": ["النهاية"]
    },
    {
        "type": "متجر",
        "answers": ["متجر"]
    },
    {
        "type": "جافاسكربت",
        "answers": ["جافاسكربت"]
    },
    {
        "type": "امازون",
        "answers": ["امازون"]
    },
    {
        "type": "كمبيوتر",
        "answers": ["كمبيوتر"]
    },
    {
        "type": "اخبار",
        "answers": ["اخبار"]
    },
    {
        "type": "يوم الخميس ويكند",
        "answers": ["يوم الخميس ويكند"]
    },
    {
        "type": "لا اله الا الله",
        "answers": ["لا اله الا الله"]
    },
    {
        "type": "سبحان الله",
        "answers": ["سبحان الله"]
    },
    {
        "type": "استغفر الله",
        "answers": ["استغفر الله"]
    },
    {
        "type": "الله اكبر",
        "answers": ["الله اكبر"]
    },
    {
        "type": "الأرض",
        "answers": ["الأرض"]
    },
    {
        "type": "اليابان",
        "answers": ["اليابان"]
    },
    {
        "type": "ايرين",
        "answers": ["ايرين"]
    },
    {
        "type": "كانيكي",
        "answers": ["كانيكي"]
    },
    {
        "type": "شجرة الأوغيري",
        "answers": ["شجرة الأوغيري"]
    },
    {
        "type": "هواوي",
        "answers": ["هواوي"]
    },
    {
        "type": "البوابة",
        "answers": ["البوابة"]
    },
    {
        "type": "المدرسة",
        "answers": ["المدرسة"]
    },
    {
        "type": "الدوام",
        "answers": ["الدوام"]
    },
    {
        "type": "كنت ماشي في الطريق",
        "answers": ["كنت ماشي في الطريق"]
    },
	{
        "type": "رادار",
        "answers": ["رادار"]
    },
	{
        "type": "ساسكي",
        "answers": ["ساسكي"]
    },
	{
        "type": "صعبه ما تستصعبهاش",
        "answers": ["صعبه ما تستصعبهاش"]
    },
	{
        "type": "الجملة المفيدة",
        "answers": ["الجملة المفيدة"]
    },
	{
        "type": "خط الرقعة",
        "answers": ["خط الرقعة"]
    },
	{
        "type": "مدنايت كلوب",
        "answers": ["مدنايت كلوب"]
    },
	{
        "type": "خطأ حاول مرة اخرى",
        "answers": ["خطأ حاول مرة اخرى"]
    },
    {
        "type": "صباح",
        "answers": ["صباح"]
    },
    {
        "type": "تكأكأتم",
        "answers": ["تكأكأتم"]
    },
    {
        "type": "المثعنجر",
        "answers": ["المثعنجر"]
    },
    {
        "type": "اطلخم",
        "answers": ["اطلخم"]
    },
    {
        "type": "عصبصب",
        "answers": ["عصبصب"]
    },
    {
        "type": "مالكم تكأكأتم على كتكأكئكم على ذي جنه افرنقعوا",
        "answers": ["مالكم تكأكأتم على كتكأكئكم على ذي جنه افرنقعوا"]
    },
    {
        "type": "يمجها الذوق ولا يرغبها",
        "answers": ["يمجها الذوق ولا يرغبها"]
    },
    {
        "type": "نايت سكاي",
        "answers": ["نايت سكاي"]
    },
    {
        "type": "الجو مشمس",
        "answers": ["الجو مشمس"]
    },
    {
        "type": "انجلترا",
        "answers": ["انجلترا"]
    },
    {
        "type": "ايرور",
        "answers": ["ايرور"]
    },
    {
        "type": "العفنج",
        "answers": ["العفنج"]
    },
    {
        "type": "كردوم",
        "answers": ["كردوم"]
    },
    {
        "type": "رونين",
        "answers": ["رونين"]
    },
    {
        "type": "ايتاشي ساما",
        "answers": ["ايتاشي ساما"]
    },
    {
        "type": "سينباي",
        "answers": ["سينباي"]
    },
    {
        "type": "شينجيكي نو كيوجين",
        "answers": ["شينجيكي نو كيوجين"]
    },
    {
        "type": "طوكيو",
        "answers": ["طوكيو"]
    },
    {
        "type": "سبحان الله وبحمده سبحان الله العظيم",
        "answers": ["سبحان الله وبحمده سبحان الله العظيم"]
    },
    {
        "type": "الأشتراك السنوي",
        "answers": ["الأشتراك السنوي"]
    },
    {
        "type": "الأشتراك الشهري",
        "answers": ["الأشتراك الشهري"]
    },
    {
        "type": "مجنون",
        "answers": ["مجنون"]
    },
    {
        "type": "الأوسكار",
        "answers": ["الأوسكار"]
    },
    {
        "type": "ذا والكنق ديد",
        "answers": ["ذا والكنق ديد"]
    },
    {
        "type": "قيم اوف ثرونز",
        "answers": ["قيم اوف ثرونز"]
    },
    {
        "type": "ليوناردو دي كابريو",
        "answers": ["ليوناردو دي كابريو"]
    },
    {
        "type": "بلايستيشن",
        "answers": ["بلايستيشن"]
    },
    {
        "type": "بسكوت ابو ولد",
        "answers": ["بسكوت ابو ولد"]
    },
    {
        "type": "فاصل إعلاني",
        "answers": ["فاصل إعلاني"]
    },
    {
        "type": "سنعود بعد قليل",
        "answers": ["سنعود بعد قليل"]
    },
    {
        "type": "لن انساك ابدا",
        "answers": ["لن انساك ابدا"]
    },
    {
        "type": "قوتشي",
        "answers": ["قوتشي"]
    },
    {
        "type": "شانيل ان",
        "answers": ["شانيل ان"]
    },
    {
        "type": "جافا",
        "answers": ["جافا"]
    },
    {
        "type": "تويكس",
        "answers": ["تويكس"]
    },
    {
        "type": "جالكسي",
        "answers": ["جالكسي"]
    },
    {
        "type": "ايفون",
        "answers": ["ايفون"]
    },
    {
        "type": "جي ميل",
        "answers": ["جي ميل"]
    }
]





















client.login(process.env.BOT_TOKEN);
