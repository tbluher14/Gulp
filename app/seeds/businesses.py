from app.models import db, Business

x = range(1, 6)


def seed_businesses():
    test_one = Business(
        name='Los Burgers No. 1', address='3899 Cooks Mine Road', city='Gallup', state='New Mexico', country='United States',
        zipCode='87301',
        website='https://losburgerspdx.com/', phone='0587256349', open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1622431062669-ed38267b6de5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home. In every taco from LOS TACOS No. 1 there is a bit of true Mexican culture and flavor.',
        owner_id=1)
    test_two = Business(
        name='Cutlets', address='3965 Crestview Terrace', city='Laredo', state='Texas', country='United States',
        zipCode='78041', website='https://www.cutlets.co/', phone='9871266789', open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM', image="https://images.unsplash.com/photo-1616420812082-1ff2334daf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", description='The fabric of Cutlets was born out of love and respect for these humble deli creations, met with a desire to bring quality ingredients to the table. Simply put, were here to bring you a sandwich experience you can feel good about.', owner_id=2)
    test_three = Business(
        name='Smoke & Fire', address='3300 Hickory Street', city='Salt Lake City', state='Utah', country='United States',
        zipCode='84104', website='https://www.thesmokeandfire.com/', phone='0198413789', open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM', image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80", description="Salt Lake City's beloved restaurant and pie shop celebrates 27 years of classic, made from scratch American cooking.", owner_id=3)
    test_four = Business(
        name='357 Burgers',
        owner_id=1,
        address='5669 S Commerce Dr',
        city='Murray',
        state='UT',
        country='USA',
        zipCode='84107',
        website='https://www.facebook.com/357burgers/',
        phone='3858002422',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1624464462992-2986c2a70b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!')

    test_five = Business(
        name='The Burger Den',
        owner_id=1,
        address='420 W 4500 S Murray',
        city='Murray',
        state='UT',
        country='USA',
        zipCode='84123',
        website='https://theburgerden.com',
        phone='8012628251',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_six = Business(
        name='Olympus Burger',
        owner_id=1,
        address='6100 S 900th E',
        city='Murray',
        state='UT',
        country='USA',
        zipCode='84121',
        website='http://olympusburgers.com',
        phone='8012626293',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1555992336-fb0d29498b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_seven = Business(
        name='Mr. Ds',
        owner_id=1,
        address='4883 State St',
        city='Murray',
        state='UT',
        country='USA',
        zipCode='84108',
        website='http://www.thecrowslc.com',
        phone='8015909187',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1543373072-69f3d4788832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_eight = Business(
        name="Woody's Drive-In",
        owner_id=1,
        address='6172 S 1300th E',
        city='Salt Lake City',
        state='UT',
        country='USA',
        zipCode='84121',
        website='https://woodysdriveinsaltlakecity.mybistro.online/',
        phone='8012666934',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1555992457-720eb4e75880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_nine = Business(
        name='Crown Burgers',
        owner_id=1,
        address='3190 Highland Dr',
        city='Salt Lake City',
        state='UT',
        country='USA',
        zipCode='84106',
        website='https://woodysdriveinsaltlakecity.mybistro.online/',
        phone='8012666934',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_ten = Business(

        name='Roam Artisan Burgers',
        owner_id=1,
        address='1923 Fillmore St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94115',
        website='http://roamburgers.com',
        phone='4158007801',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1616420812082-1ff2334daf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'

    )
    test_eleven = Business(

        name='Flippin Burger',
        owner_id=1,
        address='1419 Haight St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94117',
        website='http://eatatflippinburger.com/',
        phone='4158759933',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1615472846781-d9266dfff3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twelve = Business(

        name='Foodee Burger',
        owner_id=1,
        address='408 Dewey Blvd',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94116',
        website='http://foodeeburger.com',
        phone='4156656888',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1514996183542-72c207fee1e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )

    test_fourteen = Business(
        name='TrailBoss Burgers',
        owner_id=1,
        address='2304 Market St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94114',
        website='https://locations.superduperburgers.com/ca/san-francisco/2304-market-street.html',
        phone='4155588123',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1519167874178-f1c834c38f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_fifteen = Business(

        name='Native Burger',
        owner_id=1,
        address='3420 Geary Blvd',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94118',
        phone='3037618733',
        website='https://facebook.com/Native-Burger',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1525164286253-04e68b9d94c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_sixteen = Business(

        name='Super Duper Burgers',
        owner_id=1,
        address='3401 California St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94118',
        website='https: // www.superduperburgers.com/',
        phone='4156824197',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1584819299780-0cb713a9ba58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_seventeen = Business(
        name='Uncle Boys',
        owner_id=1,
        address='245 Balboa St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94118',
        website='https://uncleboys.com',
        phone='4157424468',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_eighteen = Business(
        name='Pals Burgers and Shakes',
        owner_id=1,
        address='57 Division St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94118',
        website='https://www.nikubutchershop.com/',
        phone='4158292306',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1579115999906-87ae4152ed03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_ninteen = Business(
        name='Mels Drive In',
        address='68 W Portal Ave',
        owner_id=1,
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94127',
        website='http://calibursf.com',
        phone='4157424931',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1589215833259-81f2d92186f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty = Business(
        name='Bucks on 66',
        owner_id=1,
        address='68 W Portal Ave',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94127',
        website='https://buckatomson66.com/products/metro-diner',
        phone='4157424931',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1624464462992-2986c2a70b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty1 = Business(
        name='Hi-Way Burger & Fry',
        owner_id=1,
        address='3853 24th St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94114',
        website='https://www.hi-wayburger.com',
        phone='4156416000',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1537157590327-6af6d87663d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty2 = Business(
        name="WesBurger 'N' More",
        owner_id=1,
        address='2240 Mission St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94110',
        website='http://www.wesburgernmore.com',
        phone='4157459371',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        image="https://images.unsplash.com/photo-1555992457-720eb4e75880?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty3 = Business(

        name='Empire Diner',
        owner_id=1,
        address='2240 Mission St',
        city='New York City',
        state='NY',
        country='USA',
        zipCode='00123',
        website='https://empire-diner.com/',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='4157459000',
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty4 = Business(

        name="Beep’s Burgers",
        owner_id=1,
        address='1051 Ocean Ave',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94112',
        website='http://www.beepsburgers.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='4154324322',
        image="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty5 = Business(
        name="Pearl's Delux Burgers",
        owner_id=1,
        address="708 Post St",
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94109',
        website='http://www.pearlsburgers.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='4154096000',
        image="https://images.unsplash.com/photo-1622431062669-ed38267b6de5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty6 = Business(
        name='Bandit',
        owner_id=1,
        address='683 Geary St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94102',
        website='http://banditsf.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='415658700',
        image="https://images.unsplash.com/photo-1616420812082-1ff2334daf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty7 = Business(
        name='Hidden Spot - SoMa',
        owner_id=1,
        address='1123 Folsom St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94103',
        website='http://hiddenspot.online',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='4158142342',
        image="https://images.unsplash.com/photo-1517601278517-456741619dad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=906&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty8 = Business(
        name='Super Duper Burgers',
        owner_id=1,
        address='127 K Serramonte Center Space 662',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94102',
        website='https://www.superduperburgers.com/',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='6507731234',
        image="https://images.unsplash.com/photo-1638725127387-9974c76769a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_twenty9 = Business(
        name='In-N-Out',
        owner_id=1,
        address='7206 Union Park Ave',
        city='Midvale',
        state='UT',
        country='USA',
        zipCode='84047',
        website='https:/in-n-out.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='8007861234',
        image="https://images.unsplash.com/photo-1636937146786-991f0ba12d8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_thirty = Business(
        name="Manhattn's Burgers",
        owner_id=1,
        address="Av. Louise 164",
        city='1000 Bruxelles',
        state='CO',
        country="USA",
        zipCode='84047',
        website="https://www.manhattn='com/location/avenue-louise",
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='8007861234',
        image="https://images.unsplash.com/photo-1620997695392-acb6be25d3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )
    test_thirty1 = Business(
        name='Burger King',
        owner_id=1,
        address='7810 S 1300 E',
        city='Sandy',
        state='UT',
        country='USA',
        zipCode='84094',
        website='https://bk.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='8012560123',
        image="https://images.unsplash.com/photo-1629814249584-bd4d53cf0e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )

    test_thirty2 = Business(
        name='Blue Star Burger',
        owner_id=1,
        address='57 Columbus Ave',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94111',
        website='https://columbusburger.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='4156056123',
        image="https://images.unsplash.com/photo-1665991946306-3ca545298331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )

    test_thirty3 = Business(

        name='Richmond Republic Draught House',
        owner_id=1,
        address='642 Clement St',
        city='San Francisco',
        state='CA',
        country='USA',
        zipCode='94118',
        website='http://richmondrepublicsf.com',
        open='7:00', close='11:00', am_pm_open='AM', am_pm_close='PM',
        phone='4157021234',
        image="https://images.unsplash.com/photo-1616420812082-1ff2334daf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxw='90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        description='Our restaurant opened in 2011 and has been a favorite in the community ever since! We offer a fun, family-friendly environment with delicious burgers, draft beer, and live sports all year around. Come stop by and try our delicious Bacon Burger with your friends while enjoying the weather on our back patio, or stop by after work for happy hour on Thursdays from 4-7p!'
    )

    db.session.add(test_one)
    db.session.add(test_two)
    db.session.add(test_three)
    db.session.add(test_four)
    db.session.add(test_five)
    db.session.add(test_six)
    db.session.add(test_seven)
    db.session.add(test_eight)
    db.session.add(test_nine)
    db.session.add(test_ten)
    db.session.add(test_eleven)
    db.session.add(test_twelve)
    db.session.add(test_fourteen)
    db.session.add(test_fifteen)
    db.session.add(test_sixteen)
    db.session.add(test_seventeen)
    db.session.add(test_eighteen)
    db.session.add(test_ninteen)
    db.session.add(test_twenty)
    db.session.add(test_twenty1)
    db.session.add(test_twenty2)
    db.session.add(test_twenty3)
    db.session.add(test_twenty4)
    db.session.add(test_twenty5)
    db.session.add(test_twenty6)
    db.session.add(test_twenty7)
    db.session.add(test_twenty8)
    db.session.add(test_twenty9)
    db.session.add(test_thirty)
    db.session.add(test_thirty1)
    db.session.add(test_thirty2)
    db.session.add(test_thirty3)

    db.session.commit()



def undo_businesses():
    db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
    db.session.commit()
