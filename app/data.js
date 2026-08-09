const CATS = [
  {
    kanji:"天", title:"Weather", sub:"small talk for every season",
    dialogs:[
      { title:"Heat & air conditioning", sub:"暑さの話 · quick summer talk", lines:[
        ["me","毎日<b>暑いですね</b>！","mainichi atsui desu ne!","It's so hot every day!"],
        ["he","本当に暑いですね。","hontō ni atsui desu ne","It really is hot."],
        ["me","この暑さ、<b>大丈夫ですか</b>？","kono atsusa, daijōbu desu ka?","Are you doing okay in this heat?"],
        ["he","ちょっと大変ですね。","chotto taihen desu ne","It's a bit rough, honestly."],
        ["me","車に<b>エアコンはありますか</b>？","kuruma ni eakon wa arimasu ka?","Does your car have air conditioning?"],
        ["he","はい、ありますよ。助かります。","hai, arimasu yo. tasukarimasu","Yes, it does. It's a lifesaver!"],
        ["me","家でも<b>エアコンを使いますか</b>？","ie demo eakon o tsukaimasu ka?","Do you use it at home too?"],
        ["he","はい、毎日使っています。","hai, mainichi tsukatte imasu","Yes, I use it every day."],
        ["me","水を<b>たくさん飲んでくださいね</b>。","mizu o takusan nonde kudasai ne","Make sure to drink plenty of water!"],
        ["he","ありがとうございます。優しいですね。","arigatō gozaimasu. yasashii desu ne","Thank you. That's very kind of you!"],
        ["me","<b>気をつけて</b>！じゃ、また！","ki o tsukete! ja, mata!","Take care! See you around!"]
      ]},
      { title:"Snow & winter", sub:"雪の話 · winter in Toyama", lines:[
        ["me","今日は<b>寒いですね</b>。","kyō wa samui desu ne","It's cold today, isn't it?"],
        ["he","そうですね。冬が来ましたね。","sō desu ne. fuyu ga kimashita ne","Yeah, it sure is. Winter's here."],
        ["me","富山は<b>雪が多いですか</b>？","Toyama wa yuki ga ōi desu ka?","Does Toyama get a lot of snow?"],
        ["he","はい、とても多いですよ。","hai, totemo ōi desu yo","Yes, a huge amount!"],
        ["me","<b>何月から降りますか</b>？","nangatsu kara furimasu ka?","Which month does it start in?"],
        ["he","十二月から三月まで降ります。","jūnigatsu kara sangatsu made furimasu","It snows from December through March."],
        ["me","雪の日、<b>運転は大丈夫ですか</b>？","yuki no hi, unten wa daijōbu desu ka?","Is it okay to drive when it snows?"],
        ["he","冬タイヤがあれば、大丈夫です。","fuyu taiya ga areba, daijōbu desu","It's fine if you have winter tires."],
        ["me","私は雪の運転が<b>ちょっと怖いです</b>。","watashi wa yuki no unten ga chotto kowai desu","I'm a little scared of driving in the snow."],
        ["he","ゆっくり運転すれば、大丈夫ですよ。","yukkuri unten sureba, daijōbu desu yo","If you drive slowly, you'll be fine."],
        ["me","そうですね。<b>気をつけます</b>。","sō desu ne. ki o tsukemasu","You're right. I'll be careful."],
        ["he","お互いに気をつけましょう！","otagai ni ki o tsukemashō!","Let's both stay safe out there!"]
      ]},
      { title:"Temperature: Toyama vs Russia", sub:"気温の話 · comparing cities", lines:[
        ["he","こんにちは！今日も暑いですね。","konnichiwa! kyō mo atsui desu ne","Hello! It's hot again today."],
        ["me","そうですね。<b>三十五度ぐらいありますね</b>。","sō desu ne. sanjūgodo gurai arimasu ne","It sure is. Must be around 35 degrees."],
        ["he","ロシアも今、暑いですか？","Roshia mo ima, atsui desu ka?","Is it hot in Russia right now too?"],
        ["me","ウラジオストクは今、<b>二十五度ぐらいです</b>。富山<b>より涼しいです</b>。","Urajiosutoku wa ima, nijūgodo gurai desu. Toyama yori suzushii desu","Vladivostok is about 25 degrees right now. Cooler than Toyama."],
        ["he","へえ、いいですね！冬は何度ぐらいですか？","hē, ii desu ne! fuyu wa nando gurai desu ka?","Oh, nice! How cold does it get in winter?"],
        ["me","<b>マイナス二十度ぐらいになります</b>。","mainasu nijūdo gurai ni narimasu","It gets down to about minus 20."],
        ["he","えー！マイナス二十度？！寒すぎます！","ē! mainasu nijūdo?! samusugimasu!","Whoa! Minus 20?! That's way too cold!"],
        ["me","でも、雪は<b>富山のほうが多いですよ</b>。","demo, yuki wa Toyama no hō ga ōi desu yo","But Toyama gets more snow, though."],
        ["he","そうなんですか？びっくりしました。","sō nan desu ka? bikkuri shimashita","Really? That's surprising."],
        ["me","ウラジオストクは<b>風が強いです</b>。富山は<b>雪が多いです</b>。","Urajiosutoku wa kaze ga tsuyoi desu. Toyama wa yuki ga ōi desu","Vladivostok has strong winds, and Toyama has a lot of snow."],
        ["he","どちらも冬は大変ですね。","dochira mo fuyu wa taihen desu ne","Winter sounds tough in both places."],
        ["me","そうですね。でも、私は<b>日本の冬のほうが好きです</b>。","sō desu ne. demo, watashi wa nihon no fuyu no hō ga suki desu","True. But I like Japan's winters better."],
        ["he","そう言ってもらえて、うれしいです！","sō itte moraete, ureshii desu!","I'm glad to hear you say that!"]
      ]},
      { title:"Rain & rainy season", sub:"梅雨の話 · tsuyu", lines:[
        ["me","最近、<b>雨が多いですね</b>。","saikin, ame ga ōi desu ne","It's been raining a lot lately, hasn't it."],
        ["he","そうですね。梅雨ですからね。","sō desu ne. tsuyu desu kara ne","Yeah, it's the rainy season."],
        ["me","梅雨は<b>いつまでですか</b>？","tsuyu wa itsu made desu ka?","How long does the rainy season last?"],
        ["he","七月の中ごろまでですね。","shichigatsu no nakagoro made desu ne","Until around the middle of July."],
        ["me","ロシアには梅雨が<b>ありません</b>。","Roshia ni wa tsuyu ga arimasen","Russia doesn't have a rainy season."],
        ["he","えー、そうなんですか！うらやましい！","ē, sō nan desu ka! urayamashii!","Whoa, really?! I'm so jealous!"],
        ["me","でも、雨の後の空気は<b>好きです</b>。","demo, ame no ato no kūki wa suki desu","But I do like the air after it rains."],
        ["he","いいですね。でも、雨の日の配達は大変ですよ。","ii desu ne. demo, ame no hi no haitatsu wa taihen desu yo","Nice. But deliveries on rainy days are rough."],
        ["me","そうですよね。<b>気をつけてくださいね</b>。","sō desu yo ne. ki o tsukete kudasai ne","I can imagine. Please take care out there!"],
        ["he","ありがとうございます！","arigatō gozaimasu!","Thank you so much!"]
      ]}
    ]
  },
  {
    kanji:"仕", title:"Work", sub:"port, documents, coworkers",
    dialogs:[
      { title:"Past & present jobs", sub:"仕事の話", lines:[
        ["me","今日も<b>忙しいですか</b>？","kyō mo isogashii desu ka?","Busy again today?"],
        ["he","そうですね、けっこう忙しいです。","sō desu ne, kekkō isogashii desu","Yeah, pretty busy."],
        ["me","この仕事は<b>長いんですか</b>？","kono shigoto wa nagai n desu ka?","Have you been at this job long?"],
        ["he","二年ぐらいですね。","ninen gurai desu ne","About two years."],
        ["me","その前は、<b>何の仕事をしていましたか</b>？","sono mae wa, nan no shigoto o shite imashita ka?","What did you do before that?"],
        ["he","前はレストランで働いていました。","mae wa resutoran de hataraite imashita","I used to work at a restaurant."],
        ["me","へえ、そうなんですね。<b>どうでしたか</b>？","hē, sō nan desu ne. dō deshita ka?","Oh, really? How was it?"],
        ["he","大変でしたけど、楽しかったですよ。","taihen deshita kedo, tanoshikatta desu yo","It was tough, but fun."],
        ["me","私は前、ロシアで<b>働いていました</b>。","watashi wa mae, Roshia de hataraite imashita","I used to work in Russia."],
        ["he","へえ！今はどんな仕事ですか？","hē! ima wa donna shigoto desu ka?","Oh! What kind of work do you do now?"],
        ["me","今は富山の会社で<b>働いています</b>。毎日、<b>車で会社に行きます</b>。","ima wa Toyama no kaisha de hataraite imasu. mainichi, kuruma de kaisha ni ikimasu","I work at a company in Toyama now. I drive to work every day."],
        ["he","日本の仕事はどうですか？","nihon no shigoto wa dō desu ka?","How's working in Japan?"],
        ["me","忙しいですけど、<b>面白いです</b>。","isogashii desu kedo, omoshiroi desu","Busy, but interesting."],
        ["he","お互いに頑張りましょう！","otagai ni ganbarimashō!","Let's both keep doing our best!"],
        ["me","はい、<b>頑張りましょう</b>！じゃ、また！","hai, ganbarimashō! ja, mata!","Yes, let's! See you around!"]
      ]},
      { title:"Port security gate", sub:"港の入口で · daily check-in", lines:[
        ["he","おはようございます。どちらの船ですか？","ohayō gozaimasu. dochira no fune desu ka?","Good morning. Which ship are you here for?"],
        ["me","おはようございます。<b>〇〇丸です</b>。","ohayō gozaimasu. marumaru-maru desu","Good morning. The (ship name) Maru."],
        ["he","今日は何の作業ですか？","kyō wa nan no sagyō desu ka?","What work are you doing today?"],
        ["me","<b>フォークリフトでパレットを船に積み込みます</b>。","fōkurifuto de paretto o fune ni tsumikomimasu","Loading pallets onto the ship with a forklift."],
        ["he","何時までの予定ですか？","nanji made no yotei desu ka?","Until what time do you expect to work?"],
        ["me","<b>夕方五時ごろまでです</b>。","yūgata goji goro made desu","Until around 5 in the evening."],
        ["he","わかりました。通行証をお願いします。","wakarimashita. tsūkōshō o onegai shimasu","Understood. Your pass, please."],
        ["me","はい、<b>どうぞ</b>。","hai, dōzo","Yes, here you go."],
        ["he","はい、けっこうです。気をつけて作業してください。","hai, kekkō desu. ki o tsukete sagyō shite kudasai","All good. Please work safely."],
        ["me","ありがとうございます。<b>お疲れ様です</b>！","arigatō gozaimasu. otsukaresama desu!","Thank you. Have a good shift!"]
      ]},
      { title:"Handing over documents", sub:"書類を渡す · short & polite", lines:[
        ["me","すみません、今、<b>お時間いいですか</b>？","sumimasen, ima, ojikan ii desu ka?","Excuse me, do you have a moment?"],
        ["he","はい、どうぞ。","hai, dōzo","Yes, go ahead."],
        ["me","こちら、<b>今日の書類です</b>。どうぞ。","kochira, kyō no shorui desu. dōzo","Here are today's documents. Please."],
        ["he","ありがとうございます。","arigatō gozaimasu","Thank you."],
        ["me","<b>重要書類</b>なので、確認を<b>お願いします</b>。","jūyō shorui na node, kakunin o onegai shimasu","These are important documents, so please check them."],
        ["he","はい、確認しますね。","hai, kakunin shimasu ne","Sure, I'll check them."],
        ["me","<b>よろしくお願いします</b>。","yoroshiku onegai shimasu","Thank you, I appreciate it."]
      ]},
      { title:"Money for tires", sub:"タイヤ代 · drift coworker", lines:[
        ["me","お疲れ様です！タイヤ、<b>届きましたよ</b>。","otsukaresama desu! taiya, todokimashita yo","Hi there! The tires have arrived."],
        ["he","ありがとうございます！","arigatō gozaimasu!","Thank you so much!"],
        ["me","これ、<b>タイヤ代です</b>。確認してください。","kore, taiya-dai desu. kakunin shite kudasai","Here's the money for the tires. Please count it."],
        ["he","はい…ちょうどですね。ありがとうございます。","hai… chōdo desu ne. arigatō gozaimasu","Right... it's exact. Thank you."],
        ["me","いない時は、お金はここに<b>置いておきますね</b>。","inai toki wa, okane wa koko ni oite okimasu ne","When you're not around, I'll leave the money here."],
        ["he","助かります！","tasukarimasu!","That really helps!"],
        ["me","今度のドリフト、<b>頑張ってください</b>！","kondo no dorifuto, ganbatte kudasai!","Good luck at the next drift event!"],
        ["he","はい、頑張ります！","hai, ganbarimasu!","Thanks, I'll do my best!"]
      ]},
      { title:"Ship delayed — shikata nai", sub:"船の遅れ · нечего не поделаешь", lines:[
        ["he","今日は船が来ませんね。","kyō wa fune ga kimasen ne","The ship isn't coming today, huh."],
        ["me","はい、<b>台風で遅れています</b>。","hai, taifū de okurete imasu","Right, it's delayed because of the typhoon."],
        ["he","じゃあ、今日の作業はどうなりますか？","jā, kyō no sagyō wa dō narimasu ka?","So what happens to today's work?"],
        ["me","明日になりました。<b>仕方ないですね</b>。","ashita ni narimashita. shikata nai desu ne","It's been moved to tomorrow. Can't be helped."],
        ["he","そうですね。<b>天気には勝てません</b>から。","sō desu ne. tenki ni wa katemasen kara","True. You can't beat the weather."],
        ["me","ええ。でも、<b>おかげで</b>今日は<b>早く帰れます</b>。","ē. demo, okage de kyō wa hayaku kaeremasu","Yeah. But thanks to that, I get to head home early today."],
        ["he","いいですね！ゆっくり休んでください。","ii desu ne! yukkuri yasunde kudasai","Nice! Get some good rest."],
        ["me","はい、家族と<b>晩ご飯を食べます</b>。","hai, kazoku to bangohan o tabemasu","Yes, I'll have dinner with my family."],
        ["he","それはいいですね。じゃあ、また明日。","sore wa ii desu ne. jā, mata ashita","That's great. See you tomorrow, then."],
        ["me","はい、<b>お疲れ様でした</b>！","hai, otsukaresama deshita!","Yes, thanks for today!"]
      ]}
    ]
  },
  {
    kanji:"旅", title:"Travel & City", sub:"places, roads, food",
    dialogs:[
      { title:"His favorite place", sub:"旅行の話", lines:[
        ["me","こんにちは！いつもありがとうございます。","konnichiwa! itsumo arigatō gozaimasu","Hello! Thanks as always."],
        ["he","いえいえ、こちらこそ。","ieie, kochira koso","Not at all, thank you."],
        ["me","ところで、旅行は<b>好きですか</b>？","tokorode, ryokō wa suki desu ka?","By the way, do you like traveling?"],
        ["he","はい、大好きですよ。","hai, daisuki desu yo","Yes, I love it!"],
        ["me","日本で<b>一番好きな場所</b>はどこですか？","nihon de ichiban sukina basho wa doko desu ka?","What's your favorite place in Japan?"],
        ["he","うーん、京都ですね。","ūn, Kyōto desu ne","Hmm, I'd say Kyoto."],
        ["me","いいですね！<b>何回ぐらい行きましたか</b>？","ii desu ne! nankai gurai ikimashita ka?","Nice! About how many times have you been?"],
        ["he","三回行きました。","sankai ikimashita","I've been three times."],
        ["me","<b>車で行きますか</b>？それとも電車ですか？","kuruma de ikimasu ka? soretomo densha desu ka?","Do you go by car, or by train?"],
        ["he","いつも車で行きます。","itsumo kuruma de ikimasu","Always by car."],
        ["me","富山から<b>何時間ぐらいかかりますか</b>？","Toyama kara nanjikan gurai kakarimasu ka?","About how many hours from Toyama?"],
        ["he","四時間ぐらいかかります。","yojikan gurai kakarimasu","About four hours."],
        ["me","私はまだ<b>行ったことがない</b>んです。今度、家族と<b>行きたいです</b>。","watashi wa mada itta koto ga nai n desu. kondo, kazoku to ikitai desu","I haven't been yet. I'd like to go with my family sometime."],
        ["he","ぜひ！おすすめですよ。","zehi! osusume desu yo","You definitely should! I recommend it."],
        ["me","おすすめの場所があったら、<b>教えてください</b>。","osusume no basho ga attara, oshiete kudasai","If you have any recommended spots, let me know."],
        ["he","金閣寺はきれいですよ。","Kinkakuji wa kirei desu yo","Kinkaku-ji is beautiful."],
        ["me","ありがとうございます！今度<b>行ってみます</b>。","arigatō gozaimasu! kondo itte mimasu","Thank you! I'll try going sometime."]
      ]},
      { title:"Food & ramen", sub:"食べ物の話", lines:[
        ["me","お昼ご飯、もう<b>食べましたか</b>？","ohirugohan, mō tabemashita ka?","Have you had lunch yet?"],
        ["he","いいえ、まだです。","iie, mada desu","No, not yet."],
        ["me","忙しいですね。<b>好きな食べ物</b>は何ですか？","isogashii desu ne. sukina tabemono wa nan desu ka?","You're busy! What's your favorite food?"],
        ["he","ラーメンが大好きです。","rāmen ga daisuki desu","I love ramen."],
        ["me","いいですね！この近くに<b>おいしいラーメン屋はありますか</b>？","ii desu ne! kono chikaku ni oishii rāmen-ya wa arimasu ka?","Nice! Is there a good ramen place near here?"],
        ["he","はい、駅の近くにありますよ。","hai, eki no chikaku ni arimasu yo","Yes, there's one near the station."],
        ["me","何ラーメンが<b>おすすめですか</b>？","nani rāmen ga osusume desu ka?","What kind of ramen do you recommend?"],
        ["he","味噌ラーメンがおいしいです。","miso rāmen ga oishii desu","The miso ramen is delicious."],
        ["me","家族と<b>行ってみます</b>。高いですか？","kazoku to itte mimasu. takai desu ka?","I'll try it with my family. Is it expensive?"],
        ["he","いいえ、安いですよ。八百円ぐらいです。","iie, yasui desu yo. happyaku-en gurai desu","No, it's cheap. About 800 yen."],
        ["me","いいですね。<b>ありがとうございます</b>！","ii desu ne. arigatō gozaimasu!","Great. Thank you!"],
        ["he","ぜひ行ってみてください！","zehi itte mite kudasai!","You should definitely try it!"]
      ]}
    ]
  },
  {
    kanji:"家", title:"Family & Leisure", sub:"kids, weekends",
    dialogs:[
      { title:"Weekends & kids", sub:"週末の話", lines:[
        ["me","週末は<b>休みですか</b>？","shūmatsu wa yasumi desu ka?","Do you have weekends off?"],
        ["he","はい、日曜日は休みです。","hai, nichiyōbi wa yasumi desu","Yes, Sundays are my day off."],
        ["me","休みの日は<b>何をしますか</b>？","yasumi no hi wa nani o shimasu ka?","What do you do on your days off?"],
        ["he","家でゲームをしたり、買い物に行ったりします。","ie de gēmu o shitari, kaimono ni ittari shimasu","I play games at home, go shopping, that kind of thing."],
        ["me","いいですね。私は子どもと<b>公園に行きます</b>。","ii desu ne. watashi wa kodomo to kōen ni ikimasu","Nice. I go to the park with my kids."],
        ["he","お子さんは何歳ですか？","okosan wa nansai desu ka?","How old are your children?"],
        ["me","息子は九歳で、娘は<b>四歳です</b>。","musuko wa kyūsai de, musume wa yonsai desu","My son is nine, and my daughter is four."],
        ["he","かわいいですね！日本語を話しますか？","kawaii desu ne! nihongo o hanashimasu ka?","That's sweet! Do they speak Japanese?"],
        ["me","はい、息子は<b>私より上手です</b>。","hai, musuko wa watashi yori jōzu desu","Yes, my son is better at it than I am."],
        ["he","すごい！子どもは早いですね。","sugoi! kodomo wa hayai desu ne","Amazing! Kids pick it up fast."],
        ["me","本当に早いです。<b>私も頑張ります</b>。","hontō ni hayai desu. watashi mo ganbarimasu","They really do. I'm trying hard too."],
        ["he","頑張ってください！","ganbatte kudasai!","Good luck!"]
      ]}
    ]
  },
  {
    kanji:"日", title:"Daily Life", sub:"sleep, routine, health",
    dialogs:[
      { title:"Didn't sleep well", sub:"寝不足 · how are you today", lines:[
        ["he","おはようございます！元気ですか？","ohayō gozaimasu! genki desu ka?","Good morning! How are you?"],
        ["me","うーん、ちょっと<b>眠いです</b>。昨日、<b>寝不足で</b>…","ūn, chotto nemui desu. kinō, nebusoku de…","Mm, a little sleepy. I didn't get enough sleep last night..."],
        ["he","大丈夫ですか？何時に寝ましたか？","daijōbu desu ka? nanji ni nemashita ka?","Are you okay? What time did you go to bed?"],
        ["me","夜中の一時ごろです。子どもが<b>なかなか寝なくて</b>。","yonaka no ichiji goro desu. kodomo ga nakanaka nenakute","Around 1 in the morning. My kids wouldn't fall asleep."],
        ["he","それは大変ですね。","sore wa taihen desu ne","That sounds rough."],
        ["me","ところで、<b>毎朝何時に起きますか</b>？","tokorode, maiasa nanji ni okimasu ka?","By the way, what time do you get up every morning?"],
        ["he","五時半に起きます。仕事が早いですから。","gojihan ni okimasu. shigoto ga hayai desu kara","I get up at 5:30. My work starts early."],
        ["me","えー、早いですね！じゃあ、<b>何時に寝ますか</b>？","ē, hayai desu ne! jā, nanji ni nemasu ka?","Whoa, that's early! So what time do you go to bed?"],
        ["he","だいたい十時ごろですね。","daitai jūji goro desu ne","Around 10, usually."],
        ["me","<b>健康的でいいですね</b>。私も早く寝ます。","kenkōteki de ii desu ne. watashi mo hayaku nemasu","That's a healthy routine. I'll turn in early tonight too."],
        ["he","お互い、体に気をつけましょう！","otagai, karada ni ki o tsukemashō!","Let's both take care of our health!"]
      ]},
      { title:"My daily schedule", sub:"一日の流れ · work-day rhythm", lines:[
        ["he","毎日、何時に仕事が始まりますか？","mainichi, nanji ni shigoto ga hajimarimasu ka?","What time does work start each day?"],
        ["me","八時からです。<b>六時半に起きて</b>、<b>七時半に家を出ます</b>。","hachiji kara desu. rokujihan ni okite, shichijihan ni ie o demasu","From eight. I get up at 6:30 and leave home at 7:30."],
        ["he","朝ご飯は食べますか？","asagohan wa tabemasu ka?","Do you eat breakfast?"],
        ["me","はい、毎朝食べます。<b>食べないと、力が出ませんから</b>。","hai, maiasa tabemasu. tabenai to, chikara ga demasen kara","Yes, every morning. I have no energy if I skip it."],
        ["he","そうですよね。仕事は何時に終わりますか？","sō desu yo ne. shigoto wa nanji ni owarimasu ka?","True. What time does work end?"],
        ["me","夕方六時ごろです。家に帰って、家族と<b>晩ご飯を食べます</b>。","yūgata rokuji goro desu. ie ni kaette, kazoku to bangohan o tabemasu","Around 6 in the evening. I go home and have dinner with my family."],
        ["he","いい生活ですね。","ii seikatsu desu ne","Sounds like a good life."],
        ["me","でも、最近は忙しくて、<b>自分の時間がなかなか取れません</b>。","demo, saikin wa isogashikute, jibun no jikan ga nakanaka toremasen","But I've been busy lately, and I can barely find time for myself."],
        ["he","わかります。私も同じです。","wakarimasu. watashi mo onaji desu","I know how that is. Same for me."],
        ["me","お互い、<b>無理しないでくださいね</b>。","otagai, muri shinaide kudasai ne","Let's both take it easy, okay?"],
        ["he","はい、ありがとうございます！","hai, arigatō gozaimasu!","Yes, thank you!"]
      ]},
      { title:"Healthy lifestyle", sub:"健康の話 · no alcohol, no smoking", lines:[
        ["me","何か<b>運動をしていますか</b>？","nanika undō o shite imasu ka?","Do you do any exercise?"],
        ["he","いいえ、あまり…。仕事で疲れて。","iie, amari… shigoto de tsukarete","Not really... I'm too tired from work."],
        ["me","私は<b>健康のために</b>、時々走っています。","watashi wa kenkō no tame ni, tokidoki hashitte imasu","I go running sometimes, for my health."],
        ["he","すごいですね！お酒は飲みますか？","sugoi desu ne! osake wa nomimasu ka?","That's great! Do you drink?"],
        ["me","いいえ、<b>全然飲みません</b>。タバコも<b>吸いません</b>。","iie, zenzen nomimasen. tabako mo suimasen","No, not at all. I don't smoke either."],
        ["he","えらいですね！長生きしますよ。","erai desu ne! nagaiki shimasu yo","That's admirable! You'll live a long life."],
        ["me","家族のために、<b>健康でいたいですから</b>。","kazoku no tame ni, kenkō de itai desu kara","I want to stay healthy for my family's sake."],
        ["he","いい考えですね。私も頑張ろうかな。","ii kangae desu ne. watashi mo ganbarō kana","Good thinking. Maybe I should try too..."],
        ["me","<b>一緒に頑張りましょう</b>！","issho ni ganbarimashō!","Let's do it together!"]
      ]}
    ]
  },
  {
    kanji:"試", title:"JLPT N5", sub:"exam-style scenes from listening tests",
    dialogs:[
      { title:"At the shop", sub:"お店で · buying", lines:[
        ["me","すみません、この傘は<b>いくらですか</b>？","sumimasen, kono kasa wa ikura desu ka?","Excuse me, how much is this umbrella?"],
        ["he","千二百円です。","sen-nihyaku-en desu","1,200 yen."],
        ["me","じゃあ、<b>これをください</b>。","jā, kore o kudasai","Then I'll take this one."],
        ["he","はい。袋はいりますか？","hai. fukuro wa irimasu ka?","Sure. Do you need a bag?"],
        ["me","いいえ、<b>大丈夫です</b>。","iie, daijōbu desu","No, that's fine."],
        ["he","ありがとうございました。","arigatō gozaimashita","Thank you for your purchase."]
      ]},
      { title:"At the restaurant", sub:"レストランで · ordering", lines:[
        ["me","すみません、メニューを<b>お願いします</b>。","sumimasen, menyū o onegai shimasu","Excuse me, could I get a menu?"],
        ["he","はい、どうぞ。","hai, dōzo","Here you go."],
        ["me","この定食は<b>何ですか</b>？","kono teishoku wa nan desu ka?","What's in this set meal?"],
        ["he","魚と、ご飯と、味噌汁です。","sakana to, gohan to, misoshiru desu","Fish, rice, and miso soup."],
        ["me","じゃあ、<b>これをお願いします</b>。それと、お水を<b>ください</b>。","jā, kore o onegai shimasu. soreto, omizu o kudasai","Then I'll have this. And some water, please."],
        ["he","かしこまりました。少々お待ちください。","kashikomarimashita. shōshō omachi kudasai","Certainly. Please wait a moment."]
      ]},
      { title:"Asking directions", sub:"道で · way to the station", lines:[
        ["me","すみません、駅は<b>どこですか</b>？","sumimasen, eki wa doko desu ka?","Excuse me, where's the station?"],
        ["he","あそこの信号を右に曲がってください。","asoko no shingō o migi ni magatte kudasai","Turn right at that traffic light."],
        ["me","右ですね。ここから<b>近いですか</b>？","migi desu ne. koko kara chikai desu ka?","Right, got it. Is it close from here?"],
        ["he","はい、歩いて五分ぐらいです。","hai, aruite gofun gurai desu","Yes, about a five-minute walk."],
        ["me","わかりました。<b>ありがとうございます</b>！","wakarimashita. arigatō gozaimasu!","Got it. Thank you!"],
        ["he","いいえ、気をつけて。","iie, ki o tsukete","No problem, take care."]
      ]},
      { title:"Setting a meeting time", sub:"約束 · time & place", lines:[
        ["me","明日、<b>何時に会いますか</b>？","ashita, nanji ni aimasu ka?","What time should we meet tomorrow?"],
        ["he","十時はどうですか？","jūji wa dō desu ka?","How about 10 o'clock?"],
        ["me","すみません、十時は<b>ちょっと</b>…。十一時は<b>大丈夫ですか</b>？","sumimasen, jūji wa chotto… jūichiji wa daijōbu desu ka?","Sorry, 10 is a bit tricky... Is 11 okay?"],
        ["he","はい、大丈夫です。どこで会いますか？","hai, daijōbu desu. doko de aimasu ka?","Yes, that works. Where should we meet?"],
        ["me","駅の前は<b>どうですか</b>？","eki no mae wa dō desu ka?","How about in front of the station?"],
        ["he","いいですね。じゃあ、明日十一時に。","ii desu ne. jā, ashita jūichiji ni","Sounds good. Tomorrow at 11, then."],
        ["me","はい、<b>また明日</b>！","hai, mata ashita!","Yes, see you tomorrow!"]
      ]},
      { title:"Café: choosing drinks", sub:"喫茶店で · from the test", lines:[
        ["he","お店の中は涼しいですね。","omise no naka wa suzushii desu ne","It's cool inside the café."],
        ["me","そうですね。何を<b>飲みますか</b>？","sō desu ne. nani o nomimasu ka?","It is. What are you going to drink?"],
        ["he","僕はオレンジジュースにします。","boku wa orenji jūsu ni shimasu","I'll have orange juice."],
        ["me","私は今朝飲みましたから、<b>他の飲み物にします</b>。","watashi wa kesa nomimashita kara, hoka no nomimono ni shimasu","I had that this morning, so I'll have something else."],
        ["he","アイスコーヒーはどうですか？ここのは美味しいですよ。","aisu kōhī wa dō desu ka? koko no wa oishii desu yo","How about iced coffee? Theirs is really good."],
        ["me","昼にも冷たい飲み物を飲みましたから、<b>温かい方にします</b>。","hiru ni mo tsumetai nomimono o nomimashita kara, atatakai hō ni shimasu","I had a cold drink at lunch too, so I'll go with something warm."]
      ]},
      { title:"Post office", sub:"郵便局で · stamps & postcard", lines:[
        ["me","すみません、82円の切手を<b>ください</b>。","sumimasen, hachijūni-en no kitte o kudasai","Excuse me, I'd like some 82-yen stamps."],
        ["he","何枚ですか？","nanmai desu ka?","How many?"],
        ["me","10枚<b>お願いします</b>。それから、はがきも1枚ください。","jūmai onegai shimasu. sorekara, hagaki mo ichimai kudasai","Ten, please. And one postcard too."],
        ["he","はい。はがきは1枚52円です。","hai. hagaki wa ichimai gojūni-en desu","Sure. Postcards are 52 yen each."],
        ["me","<b>全部でいくらですか</b>？","zenbu de ikura desu ka?","How much in total?"],
        ["he","872円です。","happyaku-nanajūni-en desu","872 yen."]
      ]},
      { title:"Family photo", sub:"家族の写真 · who is who", lines:[
        ["me","これは<b>家族の写真ですか</b>？","kore wa kazoku no shashin desu ka?","Is this a photo of your family?"],
        ["he","はい、そうです。","hai, sō desu","Yes, it is."],
        ["me","この<b>髪の長い人</b>は妹さんですか？","kono kami no nagai hito wa imōto-san desu ka?","Is this person with long hair your younger sister?"],
        ["he","いえ、それは姉です。妹はこっちです。","ie, sore wa ane desu. imōto wa kocchi desu","No, that's my older sister. My younger sister is here."],
        ["me","<b>眼鏡をかけている人</b>ですね。","megane o kakete iru hito desu ne","The one wearing glasses, right?"],
        ["he","はい、そうです！","hai, sō desu!","Yes, that's right!"]
      ]},
      { title:"Party preparation", sub:"パーティーの準備 · where things go", lines:[
        ["he","この辺にテーブルを2つ並べましょう。","kono hen ni tēburu o futatsu narabemashō","Let's set up two tables around here."],
        ["me","わかりました。椅子は<b>どうしますか</b>？","wakarimashita. isu wa dō shimasu ka?","Got it. What about the chairs?"],
        ["he","壁の方に並べてください。","kabe no hō ni narabete kudasai","Line them up along the wall, please."],
        ["me","料理と飲み物は<b>どうしますか</b>？","ryōri to nomimono wa dō shimasu ka?","What about the food and drinks?"],
        ["he","サンドイッチはテーブルの上に、飲み物は冷蔵庫に入れてください。","sandoicchi wa tēburu no ue ni, nomimono wa reizōko ni irete kudasai","Put the sandwiches on the table, and the drinks in the fridge."],
        ["me","<b>わかりました</b>！","wakarimashita!","Got it!"]
      ]},
      { title:"Movie meeting time", sub:"映画の時間 · being early", lines:[
        ["me","明日、何時に駅で<b>会いましょうか</b>？","ashita, nanji ni eki de aimashō ka?","What time should we meet at the station tomorrow?"],
        ["he","映画は4時に始まりますから、3時半はどうですか？","eiga wa yoji ni hajimarimasu kara, sanjihan wa dō desu ka?","The movie starts at 4, so how about 3:30?"],
        ["me","ちょっと遅いと<b>思いますよ</b>。","chotto osoi to omoimasu yo","I think that's cutting it a bit close."],
        ["he","じゃあ、3時15分にしますか？","jā, sanji jūgofun ni shimasu ka?","Then how about 3:15?"],
        ["me","1時間前に<b>しましょう</b>。チケットも<b>まだ買っていませんから</b>。","ichijikan mae ni shimashō. chiketto mo mada katte imasen kara","Let's meet an hour early. We haven't even bought tickets yet."],
        ["he","そうですね。じゃあ、そうしましょう。","sō desu ne. jā, sō shimashō","True. Let's do that, then."]
      ]},
      { title:"Hospital: medicine", sub:"病院で · how to take pills", lines:[
        ["he","この白い薬は、朝と夜、食事の後に飲んでください。","kono shiroi kusuri wa, asa to yoru, shokuji no ato ni nonde kudasai","Take this white medicine after breakfast and dinner."],
        ["me","はい、<b>わかりました</b>。","hai, wakarimashita","Okay, understood."],
        ["he","それから、この青い薬は朝ご飯の後だけ飲んでください。","sorekara, kono aoi kusuri wa asagohan no ato dake nonde kudasai","And take this blue one only after breakfast."],
        ["me","<b>1つですか</b>？","hitotsu desu ka?","Just one?"],
        ["he","いえ、2つ飲んでください。","ie, futatsu nonde kudasai","No, take two."],
        ["me","わかりました。<b>ありがとうございます</b>。","wakarimashita. arigatō gozaimasu","Got it. Thank you."]
      ]},
      { title:"Picnic in the park", sub:"公園で · hanami plans", lines:[
        ["me","明日、みんなで公園で<b>花を見ながら</b>お昼を<b>食べませんか</b>？","ashita, minna de kōen de hana o minagara ohiru o tabemasen ka?","Want to all have lunch in the park tomorrow while looking at the flowers?"],
        ["he","いいですね！何を持っていきましょうか？","ii desu ne! nani o motte ikimashō ka?","Sounds great! What should we bring?"],
        ["me","お弁当は公園の近くのスーパーで<b>買います</b>。","obentō wa kōen no chikaku no sūpā de kaimasu","I'll buy bento at the supermarket near the park."],
        ["he","飲み物はどうしますか？","nomimono wa dō shimasu ka?","What about drinks?"],
        ["me","<b>もう買いました</b>。","mō kaimashita","I already bought some."],
        ["he","じゃあ、私はお菓子を作って持っていきますね。","jā, watashi wa okashi o tsukutte motte ikimasu ne","Then I'll make some snacks and bring them along."]
      ]},
      { title:"Birthday gift", sub:"誕生日 · what to give", lines:[
        ["me","山田さんの誕生日に<b>何をあげますか</b>？","Yamada-san no tanjōbi ni nani o agemasu ka?","What are you giving Yamada-san for their birthday?"],
        ["he","彼女は音楽が好きですから、CDをあげます。","kanojo wa ongaku ga suki desu kara, shīdī o agemasu","She likes music, so I'll give her a CD."],
        ["me","じゃあ、私はコンサートのチケット<b>にします</b>。","jā, watashi wa konsāto no chiketto ni shimasu","Then I'll go with concert tickets."],
        ["he","でも、コンサートに1人で行きますか？","demo, konsāto ni hitori de ikimasu ka?","But would she go to the concert alone?"],
        ["me","うーん…じゃあ、<b>花かハンカチにします</b>。","ūn… jā, hana ka hankachi ni shimasu","Hmm... then I'll go with flowers or a handkerchief."],
        ["he","長く使うものがいいと思いますよ。","nagaku tsukau mono ga ii to omoimasu yo","I think something she can use for a long time is best."]
      ]}
    ]
  },
  {
    kanji:"短", title:"Quick Dialogues", sub:"30 seconds at the door",
    dialogs:[
      { title:"Receiving a parcel", sub:"荷物の受け取り", lines:[
        ["he","こんにちは！お荷物です。","konnichiwa! onimotsu desu","Hello! Delivery for you."],
        ["me","あ、<b>ありがとうございます</b>！","a, arigatō gozaimasu!","Oh, thank you so much!"],
        ["he","ここにサインをお願いします。","koko ni sain o onegai shimasu","Please sign here."],
        ["me","はい、<b>どうぞ</b>。","hai, dōzo","Sure, here you go."],
        ["he","ありがとうございます。","arigatō gozaimasu","Thank you."],
        ["me","暑いので、<b>気をつけてくださいね</b>。","atsui node, ki o tsukete kudasai ne","It's hot out, so please take care."],
        ["he","優しいですね！頑張ります！","yasashii desu ne! ganbarimasu!","That's so kind! I'll keep at it!"]
      ]},
      { title:"Quick morning greeting", sub:"朝のあいさつ", lines:[
        ["me","おはようございます！","ohayō gozaimasu!","Good morning!"],
        ["he","おはようございます！早いですね。","ohayō gozaimasu! hayai desu ne","Good morning! You're early."],
        ["me","はい、今日は<b>仕事が多いんです</b>。","hai, kyō wa shigoto ga ōi n desu","Yeah, lots of work today."],
        ["he","大変ですね。頑張ってください！","taihen desu ne. ganbatte kudasai!","Sounds tough. Good luck!"],
        ["me","ありがとうございます！<b>お互いに頑張りましょう</b>。","arigatō gozaimasu! otagai ni ganbarimashō","Thanks! Let's both do our best."]
      ]},
      { title:"Saying goodbye", sub:"さようならの言い方", lines:[
        ["me","いつも<b>ありがとうございます</b>。","itsumo arigatō gozaimasu","Thank you, as always."],
        ["he","いえいえ！","ieie!","Not at all!"],
        ["me","<b>助かります</b>。またお願いします。","tasukarimasu. mata onegai shimasu","You're a big help. See you next time."],
        ["he","はい、また来ます！","hai, mata kimasu!","Yes, I'll be back!"],
        ["me","<b>気をつけて帰ってくださいね</b>。","ki o tsukete kaette kudasai ne","Get home safe, okay?"],
        ["he","ありがとうございます！失礼します。","arigatō gozaimasu! shitsurei shimasu","Thank you! Take care."]
      ]}
    ]
  }
];

const WORDS = [
  { group:"Toyama dialect", items:[
    ["きときと","kitokito","fresh, super fresh","Toyama's signature word — used for fish and seafood. Even the airport is called Toyama Kitokito Airport. Say きときとですね！ about some sashimi and you're guaranteed a delighted reaction."],
    ["きのどくな","kinodokuna","thank you so much (Toyama dialect)","In standard Japanese, 気の毒 means \"poor you,\" but in Toyama it turned into a thank-you: \"you went to trouble for my sake.\" Nobody in Tokyo would understand it — which makes it all the more special here."],
    ["〜ちゃ","cha","sentence-ending particle","Toyama's local replacement for standard よ/ね. For example そうやちゃ means \"yeah, that's right.\" You'll hear it constantly from locals."],
    ["なーん","nān","nah, it's nothing / don't mention it","A soft way to brush something off or reply to thanks. Very Toyama in its modesty."],
    ["だんだん","dandan","thank you (western Japan)","An old-fashioned word of thanks, still alive in some western regions. Grandmothers will appreciate it."]
  ]},
  { group:"Reaction words — the soul of live dialogue", items:[
    ["えー！","ē!","whaaat?!","All-purpose surprise. Stretch out the \"e\" — the longer it is, the stronger the reaction."],
    ["へえ、そうなんですね","hē, sō nan desu ne","oh, is that so!","Reaction #1 for keeping a conversation going. Shows interest without committing to anything."],
    ["なるほど","naruhodo","I see / makes sense","A verbal nod. Japanese people say this constantly."],
    ["本当ですか？","hontō desu ka?","really?","A light mix of disbelief and interest. Casually: ほんと？"],
    ["びっくりしました","bikkuri shimashita","you surprised me!","Said after hearing something unexpected."],
    ["すごいですね！","sugoi desu ne!","amazing! / that's great!","The most common word of praise."],
    ["うらやましい！","urayamashii!","I'm jealous!","Friendly envy — a compliment to whoever you're talking to."],
    ["おつかれさまです","otsukaresama desu","thanks for your hard work","An all-purpose greeting for someone who's been working."]
  ]}
];
