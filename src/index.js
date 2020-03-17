import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// import Hello from './components/Accordion';
// import Hello from './Hello';
import './index.css';
import './style.css';
import { Accordion } from 'semantic-ui-react';


const AccordionContent = (content) => (
  <div className="indent">
    {content}
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
    content: { content: AccordionContent('You can calculate the cost of your tolls by using the interactive toll calculators for toll roads across Australia, visit www.sydneymotorways.com'), key: '13-content' },
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
  },{
    title: 'Taxi - Sydney Airport access',
    content: { content: AccordionContent('How do Taxis, Hire cars and UBER drivers access Sydney Airport?'), key: 'sa4-content' },
    key: 'sub-accordion-4'
  },{
    title: 'Opening an E-Toll Account',
    content: { content: AccordionContent('How do I open an E-Toll account?'), key: 'sa5-content' },
    key: 'sub-accordion-5'
  },{
    title: 'eMU Pass',
    content: { content: AccordionContent('Does the pass work on all toll roads?'), key: 'sa6-content' },
    key: 'sub-accordion-6'
  },{
    title: 'ERider',
    content: { content: AccordionContent('What toll roads can I use with an ERider Account?'), key: 'sa7-content' },
    key: 'sub-accordion-7'
  },{
    title: 'Vehicle Matching Fees',
    content: { content: AccordionContent('What are "Vehicle Matching" Fees?'), key: 'sa8-content' },
    key: 'sub-accordion-8'
  },{
    title: 'Merchant Fees',
    content: { content: AccordionContent('Merchant fees on credit card transactions.'), key: 'sa9-content' },
    key: 'sub-accordion-9'
  },{
    title: 'Managing my E-Toll account.',
    content: { content: AccordionContent('How do I log in to my E-Toll Account?'), key: 'sa10-content' },
    key: 'sub-accordion-10'
  },{
    title: 'SMS',
    content: { content: AccordionContent('SMS messaging.'), key: 'sa11-content' },
    key: 'sub-accordion-11'
  },{
    title: 'M5 Cashback Scheme',
    content: { content: AccordionContent('What is M5 Cashback? '), key: 'sa12-content' },
    key: 'sub-accordion-12'
  }
]

// const SubAccordions = (
//   <div className="indent">
//     <Accordion.Accordion
//       className="no-padding SubAccordionPanels"
//       panels={SubAccordionPanels}
//     />
//   </div>
// )

// const AccordionPanels = [
//   { title: 'Accordion', content: { content: SubAccordions, key: 'sub-accordions' } },
// ]

const AccordionExampleNested = () => (
  <Accordion
    // defaultActiveIndex={0} 
    panels={SubAccordionPanels}
  />
)


class App extends React.Component {
  render() {
    return (
      <div className='divFaq'>
        <h1 className='faq'>Frequently Asked Questions</h1>
        <h4 className='faq_intro'>Choose a topic which best matches your query: </h4>
        <AccordionExampleNested />
      </div>
    )
  }
}




render(<App />, document.getElementById('root'));

