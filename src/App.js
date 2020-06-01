import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {
  render () {
    return (
      <div className="page">
          <Header />
          <div className="content">
            <div className="banner" style={{backgroundColor: 'lightgray'}}>CMO TODAY</div>
            <h5 style={{textAlign: 'left', marginLeft:'24vw'}}>Business | Media & Marketing | CMO</h5>
            <h1 className='title' 
            style={{marginLeft:'24vw', marginRight: '20vw', textAlign: 'left'}}>What Is Header Bidding, and Why Does Wall Street Care?</h1>
            <img src="https://si.wsj.net/public/resources/images/MW-EH328_gavel_ZG_20160307165700.jpg"
              style={{width: '50vw'}}
            ></img><br/><br/>
              <div style={{marginLeft:'24vw', marginRight: '20vw', textAlign: 'left'}}>
              From wsj.com:<br/>
              By Jack Marshall<br/>
              Aug. 4, 2016 5:19 pm ET<br/><br/>
              The world of advertising technology is full of terminology that publishers, investors and analysts have grappled to get their heads around.

              The latest complex online ad tactic they are struggling to come to grips with is known as “header bidding,” and it seemed to come up again and again this week as publicly traded advertising technology companies reported their earnings results.

              Rubicon Project’s RUBI +6.38% shares fell more than 30% on Wednesday after the ad tech company reported a decline in desktop ad revenue, and attributed that decline to the company being slow to offer header bidding solutions to its publisher customers. The company launched a header bidding feature in October.

              “We initially thought that header bidding was a solution that would have had a short existence based on historical trends we witnessed in early years of the business. This was a misread of the market on our part,” said Frank Addante, chief executive at Rubicon Project.
              Executives from online ad firm Criteo CRTO +2.44% were also quizzed about the technology on the company’s earnings call Wednesday, and Chief Executive Eric Eichmann warned investors that it may have to pay more to acquire ad space as publishers adopt the technology.

              <br/><br/>So, what exactly is header bidding?

              Header bidding technology is complicated, but the benefit for website publishers is simple: It allows publishers to squeeze more revenue from the ad space they sell through auction-based “programmatic” ad systems.

              How does it do this? In simple terms, header bidding creates greater competition among ad buyers bidding against each other to serve ads to users on publishers’ sites. It’s the latest advancement in selling advertising through automated ad exchanges.

              Before, when a webpage was loaded by a user, a publisher might offer ad impressions on that page for sale through an auction system known as an ad exchange. If the ad impression didn’t sell, or didn’t meet a reserve price set by the publisher for that impression, the publisher might subsequently offer it for sale through a different exchange provided by a different company.

              This practice is often referred to as a “daisychain” approach, because a single ad impression might be offered for sale on four or five ad exchanges, in sequence, before it eventually sells. (All of this activity occurs in fractions of a second as a webpage is loading.)

              Header bidding, however, allows publishers to break this daisychain and instead have various ad exchanges effectively compete against each other in the auction process at the same time. This can help drive up the ad prices collected by publishers and help ensure fewer of their ad impressions go unsold.

              Some publishers and ad buyers also believe header bidding can help negate advantages afforded to Google because of its popular ad-serving technology DoubleClick, which many online publishers use to place advertising on their pages. Google also operates its own ad exchange, which is integrated closely with its DoubleClick ad-serving technology. Some ad tech executives say this gives the online ad giant’s exchange an advantage over others.

              Online publishers have gravitated to header-bidding solutions in recent years and toward ad tech companies that offer the feature because the technology helps them extract more revenue from their ad space.

              Some ad tech providers have been quicker to adopt the technology than others, hence investors’ concerns over Rubicon Project’s statements this week.

              Companies that do offer header bidding technology say demand for those products is increasing.

              Write to Jack Marshall at Jack.Marshall@wsj.com
              </div>
          </div>
      </div>
    )
  }
}

export default App;
