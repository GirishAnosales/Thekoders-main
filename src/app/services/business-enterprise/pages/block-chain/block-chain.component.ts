import { Component } from '@angular/core';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.scss']
})
export class BlockChainComponent {

  r1 = [
    { title: "Blockchain Technology", content: "A Blockchain is a decentralized digital ledger that stores transactions on thousands of computers around the world. The Blockchain has led to the development of thousands of new jobs and new startups ranging from mobile payment solutions to healthcare applications. Blockchain is one of the emerging technologies currently on the market that provides the opportunity to radically transform the way we do things by providing a standard architecture to address different business and organizational problems." },
  ]

  r2 = [
    { title: "Transparency", content: "Blockchain technology is a type of distributed ledger, all network participants share the same documentation and require special permission to alter the data and make it more transparent." },
    { title: "Decentralized", content: "Blockchain technology is proving to be a really effective tool for decentralizing the web. The owner has direct control over their account using a key linked to their account that gives the owner the ability to transfer their assets to anyone they want." },
    { title: "Secured", content: "Blockchain technology has greater security because there is not a single possibility of shutting down the system and the transactions are cryptographically secured and provide integrity." },
    { title: "Reduction in Cost", content: "In blockchain, you don't need as many third parties or middlemen to provide guarantees that will cut the costs you only need to trust the data on the blockchain." },
    { title: "Peer-to-Peer Transactions", content: "It allowed for fast, safe and cheap transfer of funds around the world, it has no limitations such as location, minimum transfer, security, that's why you prefer cryptocurrency for international transfers." },
  ]

  r3 = [
    { title: "Define", content: "Start development by defining all system requirements, making initial technology decisions and recording user roles and personas." },
    { title: "Design", content: "Determine the initial look and feel of your product, model the user experience and user experience, prioritize the features and schedule the release." },
    { title: "Deliver", content: "Get ahead with detailed, development-ready specifications, time and cost estimates, a launch plan and a team of TheKoders experts To carry out your plan." },
    { title: "Develop", content: "Throughout the product development phase, track QA, DevOps, and deployment updates using your preferred project management tool." },
    { title: "Test", content: "Conduct thorough testing to ensure the functionality, usability, and security of the product." },
    { title: "Deploy", content: "Deploy the product to the desired platform and ensure it is working properly." },
    { title: "Support and Maintenance", content: "Provide ongoing support and maintenance to ensure the product continues to function properly and address any issues that may arise." },
  ]
}
