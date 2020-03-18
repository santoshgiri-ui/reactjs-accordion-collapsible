import React from 'react';
import { render } from 'react-dom';
import './index.css';
import './style.css';
import { Accordion } from 'semantic-ui-react';

const AccordionContent = (content) => (
  <div className="indent">
    {content}
  </div>
)
const AccordionContentTable = (content) => (
  <div className="indent">
   <span className='sub-heading'>{content}<a className="anchok-link" href="https://www.rms.nsw.gov.au/sydney-motorways/">www.sydneymotorways.com</a></span> 
    <table>
  <tr>
    <th>NSW toll road </th>
    <th>Distance</th>
    <th>Direction charged </th>
    <th>Toll type </th>
    <th>Payment Accepted </th>
  </tr>
  <tr>
    <td>Sydney Harbour Bridge</td>
    <td>1.1km</td>
    <td>Southbound</td>
    <td><a className="anchok-link" href='https://www.myrta.com/wps/portal/extvp/myrta/etoll/faqs/!ut/p/b1/04_SjzS0MDY2MrI0NzHQj9CPykssy0xPLMnMz0vMAfGjzOINPFwDwkKNzA0Ngj3NDDydQsP8wxyNDS18jfUjgQrMcSpwNdQP0Y_0cdLPjXJPBwALQ3bB/'>Time of day tolling</a></td>
    <td>Tag accepted</td>
  </tr>
  <tr>
    <td>Sydney Harbour Tunnel</td>
    <td>2.3km</td>
    <td>Southbound</td>
    <td><a className="anchok-link" href='https://www.myrta.com/wps/portal/extvp/myrta/etoll/faqs/!ut/p/b1/04_SjzS0MDY2MrI0NzHQj9CPykssy0xPLMnMz0vMAfGjzOINPFwDwkKNzA0Ngj3NDDydQsP8wxyNDS18jfUjgQrMcSpwNdQP0Y_0cdLPjXJPBwALQ3bB/'>Time of day tolling</a></td>
    <td>Tag accepted</td>

  </tr>
  <tr>
    <td>Hills M2 Motorway</td>
    <td>21km</td>
    <td>Both directions</td>
    <td>Flat rate</td>
    <td>Tag accepted</td>

  </tr>
  <tr>
    <td>M5 South-West Motorway</td>
    <td>22km</td>
    <td>Both directions</td>
    <td>Flat rate</td>
    <td>Tag accepted</td>

  </tr>
  <tr>
    <td>Westlink M7 Motorway</td>
    <td>40km</td>
    <td>Both directions</td>
    <td>Distance based</td>
    <td>Tag accepted</td>

  </tr>
  <tr>
    <td>Eastern Distributor</td>
    <td>6.0km</td>
    <td>Northbound</td>
    <td>Flat rate</td>
    <td>Tag accepted</td>

  </tr>
  
</table>
    
  </div>
)

const SubAccordion1Panels = [
  {
    title: 'What is a toll road and how does tolling work?',
    content: { content: AccordionContent('In Australia, all toll roads are electronically tolled. There are no cash tollbooths.'), key: '11-content' },
    key: 'sub-accordion-11'
  }, {
    title: 'Toll roads',
    content: { content: AccordionContent('Toll roads in NSW:'), key: '12-content' },
    key: 'sub-accordion-12'
  }, {
    title: 'How do I calculate the toll costs before I travel on a toll road?',
    content: { content: AccordionContentTable('You can calculate the cost of your tolls by using the interactive toll calculators for toll roads across Australia, visit'), key: '13-content' },
    key: 'sub-accordion-13'
  },
]

const SubAccordion1Content = (
  <div className="indent">
    <Accordion.Accordion
      style={{ marginLeft: "20px" }}
      className="no-padding"
      panels={SubAccordion1Panels}
    />
  </div>
)

const SubAccordionPanels = [
  {
    title: 'Travelling on a toll road',
    content: { content: SubAccordion1Content, key: 'sa1-content' },
    key: 'sub-accordion-1'
  }, {
    title: 'Tags',
    content: { content: AccordionContent('What is a tag?'), key: 'sa2-content' },
    key: 'sub-accordion-2'
  }, {
    title: 'Lost and Stolen tags',
    content: { content: AccordionContent('What to do if your E-Toll tag is lost?'), key: 'sa3-content' },
    key: 'sub-accordion-3'
  }, {
    title: 'Taxi - Sydney Airport access',
    content: { content: AccordionContent('How do Taxis, Hire cars and UBER drivers access Sydney Airport?'), key: 'sa4-content' },
    key: 'sub-accordion-4'
  }, {
    title: 'Opening an E-Toll Account',
    content: { content: AccordionContent('How do I open an E-Toll account?'), key: 'sa5-content' },
    key: 'sub-accordion-5'
  }, {
    title: 'eMU Pass',
    content: { content: AccordionContent('Does the pass work on all toll roads?'), key: 'sa6-content' },
    key: 'sub-accordion-6'
  }, {
    title: 'ERider',
    content: { content: AccordionContent('What toll roads can I use with an ERider Account?'), key: 'sa7-content' },
    key: 'sub-accordion-7'
  }, {
    title: 'Vehicle Matching Fees',
    content: { content: AccordionContent('What are "Vehicle Matching" Fees?'), key: 'sa8-content' },
    key: 'sub-accordion-8'
  }, {
    title: 'Merchant Fees',
    content: { content: AccordionContent('Merchant fees on credit card transactions.'), key: 'sa9-content' },
    key: 'sub-accordion-9'
  }, {
    title: 'Managing my E-Toll account.',
    content: { content: AccordionContent('How do I log in to my E-Toll Account?'), key: 'sa10-content' },
    key: 'sub-accordion-10'
  }, {
    title: 'SMS',
    content: { content: AccordionContent('SMS messaging.'), key: 'sa11-content' },
    key: 'sub-accordion-11'
  }, {
    title: 'M5 Cashback Scheme',
    content: { content: AccordionContent('What is M5 Cashback? '), key: 'sa12-content' },
    key: 'sub-accordion-12'
  }
]

const AccordionExampleNested = () => (
  <Accordion
    // defaultActiveIndex={0} 
    panels={SubAccordionPanels}
  />
)

class App extends React.Component {
  render() {
    return (
      <React.Fragment className='divFaq'>
        <h1 className='faq'>Frequently Asked Questions</h1>
        <h4 className='faq_intro'>Choose a topic which best matches your query: </h4>
        <AccordionExampleNested />
      </React.Fragment>
    )
  }
}

render(<App />, document.getElementById('root'));

