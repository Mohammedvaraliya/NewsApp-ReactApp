import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": null,
                "name": "The Siasat Daily"
            },
            "author": "Indo-Asian News Service",
            "title": "NASA’s James Webb takes star-filled portrait of Pillars of Creation - The Siasat Daily",
            "description": "According to the space agency, the three-dimensional pillars look like majestic rock formations but are far more permeable.",
            "url": "https://www.siasat.com/nasas-james-webb-takes-star-filled-portrait-of-pillars-of-creation-2438545/",
            "urlToImage": "https://cdn.siasat.com/wp-content/uploads/2022/04/NASa-1.jpg",
            "publishedAt": "2022-10-20T13:18:00Z",
            "content": "New York: NASA has announced that its James Webb Space Telescope has captured a lush, highly detailed landscape — the iconic Pillars of Creation, where new stars are forming within dense clouds of ga… [+1335 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "STUNNING Orionid meteor shower set to peak tomorrow; Know how to watch it LIVE online - HT Tech",
            "description": "The brightly lit Orionid meteor shower is set to peak tomorrow, October 21. Know all about it and how to watch it live online.",
            "url": "https://tech.hindustantimes.com/tech/news/stunning-orionid-meteor-shower-set-to-peak-tomorrow-know-how-to-watch-it-live-online-71666269611565.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/10/20/1600x900/4_1653827062612_1666269633977_1666269633977.jpg",
            "publishedAt": "2022-10-20T12:41:54Z",
            "content": "The next few days are going to be incredible for astronomy enthusiasts. On October 25, the last partial solar eclipse of the year will appear and will be visible across Russia, Kazakhstan and India. … [+1938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Reuters",
            "title": "Liz Truss resigns as UK Prime Minister amid political crisis - The Indian Express",
            "description": "Liz Truss announced her resignation amid a political crisis, making her 45-day tenure, the shortest in Britain's history.",
            "url": "https://indianexpress.com/article/world/uk-liz-truss-press-statement-8221349/",
            "urlToImage": "https://images.indianexpress.com/2022/10/Liz-Truss-5.jpg",
            "publishedAt": "2022-10-20T12:32:34Z",
            "content": "Speaking outside the door of her Number 10 Downing Street office, Truss accepted that she had lost the faith of her party and said she would step down next week, becoming the shortest-serving prime m… [+3081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zee Business"
            },
            "author": "ZeeBiz WebTeam",
            "title": "LIVE: Quarterly Results Today - Q2FY23 Earnings Announcements | Axis Bank, Asian Paints, Canara Bank - Zee Business",
            "description": "LIVE UPDATES: Quarterly Results Today - Q2FY23 Earnings Announcements | ITC, ASIAN PAINTS, AXIS BANK",
            "url": "https://www.zeebiz.com/market-news/live-updates-live-updates-quarterly-results-today-q2fy23-earnings-announcements-itc-asian-paints-axis-bank-dixon-happiest-minds-indiamart-nazara-tanla-platforms-canara-union-bank-and-more-204061",
            "urlToImage": "https://cdn.zeebiz.com/sites/default/files/2022/10/20/206474-q2fy23results.gif",
            "publishedAt": "2022-10-20T12:32:20Z",
            "content": "Public sector lender Central Bank of India on Thursday reported a 27 per cent jump in net profit at Rs 318 crore in the second quarter ended September, helped by a decline in bad loans.\r\nThe lender h… [+1693 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "PM Modi's Diwali Job Fest - 10 Lakh People To Be Hired On Mission Mode - NDTV",
            "description": "PM Narendra Modi will launch a mega 'Rozgar Mela' of job fest, a drive to recruit 10 lakh people, on October 22 via video-conference and appointment letters will be given to 75,000 candidates during the ceremony, the PM's Office said today.",
            "url": "https://www.ndtv.com/india-news/pm-narendra-modis-mega-job-fest-this-diwali-10-lakh-recruitments-on-mission-mode-3448932",
            "urlToImage": "https://c.ndtvimg.com/2021-10/4sfkrgdo_pm-modi-pti_650x400_22_October_21.jpg",
            "publishedAt": "2022-10-20T12:22:00Z",
            "content": "PM Modi will launch a mega 'Rozgar Mela' or job fest to recruit 10 lakh people on mission mode.\r\nNew Delhi: Prime Minister Narendra Modi will launch a mega 'Rozgar Mela' of job fest, a drive to recru… [+1968 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Assam: West Karbi Anglong Is No More A 'Disturbed Area', AFSPA Extended In 8 Districts - ABP Live",
            "description": "After a review of the law and order situation in Assam, AFSPA was extended in eight districts and one sub-division for six more months.",
            "url": "https://news.abplive.com/news/india/assam-west-karbi-anglong-is-no-more-a-disturbed-area-afspa-extended-in-8-districts-1559151",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/20/cdbc27d34add201a5484c34f424ec7a11666266900317320_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2022-10-20T12:02:26Z",
            "content": "The Assam government on Thursday withdrew the declaration of 'Disturbed Area' under the Armed Forces (Special Powers) Act (AFSPA) from West Karbi Anglong district as the situation there has \"consider… [+2083 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Business Standard"
            },
            "author": "BS Web Team",
            "title": "Garmin Venu Sq 2 smartwatches with built-in GPS unveiled: Know price, specs - Business Standard",
            "description": "The Venu Sq 2 and Venu Sq 2 Music Edition are priced at Rs 27990 and Rs 33490 respectively The watches will be available across online and offline platforms from October 28",
            "url": "https://www.business-standard.com/article/technology/garmin-venu-sq-2-smartwatches-with-built-in-gps-unveiled-know-price-specs-122102000896_1.html",
            "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2022-10/20/full/1666264993-5882.jpg",
            "publishedAt": "2022-10-20T11:41:00Z",
            "content": "Expanding its smartwatch line-up in India, Garmin on Thursday announced the Venu Sq 2 and Venu Sq 2 - Music Edition. The watches will be available from October 28 on both online and offline platforms… [+1744 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "Namibia vs United Arab Emirates, 10th Match, Group A, ICC Mens T20 WC 2022 - Cricbuzz",
            "description": "Follow Namibia vs United Arab Emirates, 10th Match, Group A, Oct 20, ICC Mens T20 WC 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/cricket-commentary/43031/nam-vs-uae-10th-match-group-a-icc-mens-t20-world-cup-2022",
            "urlToImage": 'https://www.cricbuzz.com/a/img/v1/420x235/i1/c244956/wiese-fifty-in-vain-as-namibia.jpg',
            "publishedAt": "2022-10-20T11:40:50Z",
            "content": "22:31 Local Time, 11:31 GMT, 17:01 IST: What a strange, strange innings of cricket this has been! Namibia lose three wickets within the powerplay, and their chase was going nowhere when skipper Gerha… [+671 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Mallika Soni",
            "title": "Iran girl, 16, beaten to death for not singing anthem praising supreme leader - Hindustan Times",
            "description": "Iran Anti-Hijab Protests: Asra Panahi's death comes at a time when Iran is witnessing anti-government protests which began over a month ago. | World News",
            "url": "https://www.hindustantimes.com/world-news/asra-panahi-death-iran-anti-hijab-protests-mahsa-amini-protests-iran-protests-iran-girl-16-beaten-to-death-for-not-singing-anthem-praising-supreme-leader-101666262427700.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/10/20/1600x900/304929-iran_1666262494212_1666262499065_1666262499065.jpg",
            "publishedAt": "2022-10-20T11:00:18Z",
            "content": "A 16-year-old Iranian girl died after she was allegedly beaten up by security forces in her classroom. The girl was beaten up for refusing to sing an anthem praising supreme leader Ayatollah Ali Kham… [+1183 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Rakesh Patil",
            "title": "Closing Bell: Sensex, Nifty end higher amid volatility led by IT, power, metal, PSU banks - Moneycontrol",
            "description": "Among sectors, Information Technology, metal, PSU Bank, power and oil &amp; gas up 1 percent each.",
            "url": "https://www.moneycontrol.com/news/business/markets/share-market-live-updates-stock-market-today-october-20-latest-news-bse-nse-sensex-nifty-covid-coronavirus-itc-asian-paints-axis-bank-bajaj-finance-indusind-bank-bharat-electronics-lic-angel-one-9359141.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2021/07/Sensex-770x433.jpg",
            "publishedAt": "2022-10-20T10:47:25Z",
            "content": "October 20, 2022 / 03:34 PM IST\r\nMarket Close: Indian benchmark indices ended on positive note in the volatile session on October 20.\r\nAt Close, the Sensex was up 95.71 points or 0.16% at 59,202.90, … [+495 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Video Of Firecracker Celebration Is Latest Flashpoint Between BJP, AAP - NDTV",
            "description": "Several other BJP leaders have tweeted the video, questioning the \"hypocrisy\" and \"double standard\" of the Delhi government. They have also given the matter a communal colour.",
            "url": "https://www.ndtv.com/india-news/bjp-vs-aap-firecracker-flashpoint-in-delhi-over-viral-celebration-video-3448562",
            "urlToImage": "https://c.ndtvimg.com/2022-10/lr0lq5p_raj-kumar-anand-firecracker-video_625x300_20_October_22.jpg",
            "publishedAt": "2022-10-20T10:27:00Z",
            "content": "\"All such laws are for Hindu festivals only,\" a BJP spokesperson said while attacking AAP.\r\nNew Delhi: A day after Delhi's Environment Minister Gopal Rai announced that a complete ban on the sale of … [+2784 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Peter",
            "title": "Apple iPhone SE 4 renders show XR design, surprise no one - GSMArena.com news - GSMArena.com",
            "description": "The notch is in, the TouchID home button is out - the next iPhone SE will jump forward to the FaceID era of iPhones.",
            "url": "https://www.gsmarena.com/apple_iphone_se_4_renders_show_xr_design_surprise_no_one-news-56228.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/10/iphone-se-2023-renders/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2022-10-20T10:12:01Z",
            "content": "There has been muchtalk that the next iPhone SE model will be based on the iPhone XR from the early notch era. Leakster Jon Prosser backs that up with info by an anonymous source, info that was used … [+1721 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "Tech Desk",
            "title": "Apple iPad price hike: How much each iPad model costs now - The Indian Express",
            "description": "Apple iPad: Here's the price of each iPad available officially right now, across models and storage variants.",
            "url": "https://indianexpress.com/article/technology/mobile-tabs/apple-ipad-price-hike-how-much-each-ipad-model-costs-now-8220892/",
            "urlToImage": "https://images.indianexpress.com/2022/10/iPad-Pro-2022-1.jpg",
            "publishedAt": "2022-10-20T10:05:47Z",
            "content": "Apple recently launched new iPads globally including the new M2-powered iPad Pro variants as well as the new iPad 10th Gen. With the new tablets and the accessories that come with them, the brand has… [+2338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Crictracker.com"
            },
            "author": "CricTracker Staff",
            "title": "T20 World Cup 2022: SL vs NED Match Prediction – Who will win today’s T20 WC match between Sri Lanka and Netherlands? - CricTracker",
            "description": "Sri Lanka will take on the Netherlands in a must-win clash to keep their T20 World Cup campaign alive. The Island Nation has received a setback as their express pacer Dushmantha Chameera has been rule",
            "url": "https://www.crictracker.com/cricket-match-predictions/t20-world-cup-2022-sl-vs-ned-match-prediction-who-will-win-todays-t20-world-cup-match-between-sri-lanka-and-netherlands/",
            "urlToImage": "https://media.crictracker.com/media/attachments/1666093032172_Sri-Lanka-team.jpeg",
            "publishedAt": "2022-10-20T10:02:17Z",
            "content": "Sri Lanka will take on the Netherlands in a must-win clash to keep their T20 World Cup campaign alive. The Island Nation has received a setback as their express pacer Dushmantha Chameera has been rul… [+2038 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abplive.com"
            },
            "author": "Radifah Kabir",
            "title": "World Osteoporosis Day: Bones Can Weaken At An Earlier Age In Women Than In Men, Exercising Can Help, Experts Say - ABP Live",
            "description": "World Osteoporosis Day: The levels of oestrogen in women suddenly decline after menopause. This leads to accelerated loss of bone mass, and is the main reason why women are more prone to osteoporosis",
            "url": "https://news.abplive.com/science/world-osteoporosis-day-2022-bones-can-weaken-at-an-earlier-age-in-women-than-in-men-exercising-can-help-experts-say-1559080",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/10/20/b1f2f84e3f83d641324672201b8c46421666249408551324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2022-10-20T09:46:59Z",
            "content": "World Osteoporosis Day is observed annually on October 20. Osteoporosis is a bone disease that develops when bone mineral density and bone mass decrease, or when the quality or structure of the bones… [+9874 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Buzz Staff",
            "title": "‘Ma******d’: Fired MP Conductor Takes Revenge With One Last Message for Bus Owner - News18",
            "description": "A video which is going viral shows the LED image on the windscreen of the bus completely changed.",
            "url": "https://www.news18.com/news/buzz/fired-mp-conductor-takes-revenge-with-one-last-message-for-bus-owner-6206017.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/10/bus-3-166625699516x9.jpg",
            "publishedAt": "2022-10-20T09:18:42Z",
            "content": "In a strange incident, a bus conductor became extremely revengeful after he was laid off and abused by some Bus Services Company. The incident took place in Indore. A video which is going viral shows… [+2117 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Shah Rukh Khan was perfect for Pardes, recalls Subhash Ghai: 'But Mahima…' - Hindustan Times",
            "description": "Shah Rukh Khan and Mahima Chaudhry's Pardes was released in 1997. In a recent interview, director Subhash Ghai recalled the hurdles he faced while casting for the film, which also marked Mahima's Bollywood debut. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-was-perfect-for-pardes-recalls-subhash-ghai-but-mahima-101666255026463.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/10/20/1600x900/Subhash_Ghai_Pardes_1666255542253_1666255562923_1666255562923.jpg",
            "publishedAt": "2022-10-20T09:12:29Z",
            "content": "Subhash Ghais film Pardes completed 25 years in August this year. The filmmaker launched Mahima Chaudhry with the movie that featured Shah Rukh Khan in the lead role. In a recent interview, Subhash r… [+2085 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Deccan Herald"
            },
            "author": null,
            "title": "[HOAX INFORMED] Total Health Keto Gummies UK Reviews SCAM EXPOSED Also Available in Australia and NZ - Deccan Herald",
            "description": "Overview: - Total Health Keto Gummies UK Review Even when you're eating healthily, you still can't seem to get your weight down? Now is the time to put an end, once and for all, to dangerous fat accumulation and permanent obesity.",
            "url": "https://www.deccanherald.com/brandspot/pr-spot/hoax-informed-total-health-keto-gummies-uk-reviews-scam-exposed-also-available-in-australia-and-nz-1155256.html",
            "urlToImage": "https://www.deccanherald.com/sites/dh/files/fxgnchg-1155256-1666256739.jpg",
            "publishedAt": "2022-10-20T09:05:39Z",
            "content": "Overview: - Total Health Keto Gummies UK ReviewEven when you're eating healthily, you still can't seem to get your weight down? Now is the time to put an end, once and for all, to dangerous fat accum… [+13644 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today Web Desk",
            "title": "Astronauts to resume spacewalks outside Space Station, six months after incident - India Today",
            "description": "The spacewalks on the Space Station were halted after a thin layer of moisture was discovered inside astronaut Matthias Maurer’s helmet.",
            "url": "https://www.indiatoday.in/science/story/nasa-international-space-station-astronaut-spacewalk-2287659-2022-10-20",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/spacewalks-sixteen_nine.jpg?VersionId=y4HDNs7_goKPwYuI8KrVKgSh12FMwnWd",
            "publishedAt": "2022-10-20T08:33:08Z",
            "content": "By India Today Web Desk: Over six months after an incident put an abrupt pause on spacewalks, Nasa has given the green light to resume the activity outside the flying laboratory. Astronauts will end … [+2856 chars]"
        }
    ]

    constructor() {
        super();
        console.log("hello i am constructor from News component");
        this.state = {
            articles: this.articles
        }
    }

    static propTypes = {}

    render() {
        return (
            <div className='container my-3'>
                <h2>NewsDaddy - Top Headlines</h2>
                
                <div className="row my-4">
                {this.articles.map((element)=>{
                    return <div key={element.url} className="col-md-4 mb-4">
                        <NewsItem title={element.title} newsUrl={element.url} description={element.description} imageUrl={element.urlToImage} />
                    </div>
                })}
                    
                </div>

            </div>
        )
    }
}

export default News