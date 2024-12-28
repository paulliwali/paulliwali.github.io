# Introduction
- Monolith -> microliths (temporary and an anti-pattern) -> microsystems
	- The book will walk through the transition from monolith applications to microsystems that are scalable and resilient
- As the modern user requirements for applications have come to expect millisecond latency and almost 100% uptime the only way to support his is through new architecture and tools
	- The time for monolith application is over and we need to decompose the system into manageable, discrete services that can be scaled individually, that can fail, be rolled out and upgraded in isolation
	- ==microservices==
# Chapter 1: Essential Traits of an individual microservice
- Isolation
	- Biggest impact on the architecture because it will slice up everything so should be considered from day one
	- Makes it natural to adopt continuous delivery and easy to scale each service 
- Autonomicity 
	- Once isolation is met, we can create fully autonomous services that make decisions independently
	- This is a foundational feature to allow for the development organization to also stay autonomous from each other
- Single responsibility
	- Following the unix philosophy and OOP - single responsibility principle, microservices is referring to its scope
- Exclusive state
	- Contain stateful components which means that data can be strongly consistent only within each service but *never between services*
	- This means that you can disguise a monolith as a set of microservices that has their data shared
- Mobility
	- Allows the system to be elastic and adapt dynamically to its usage patterns
	- Makes use of modern resource structure
## Chapter 2: Slaying the monolith
The reason we don't want to build monolith application is because
- Strong coupling between and within each service creates friction when trying to understand and make improvements
- Cascade failures 
- All or nothing scaling 
Don't also just build microliths
- If you just blindly follow some kind of automated tool to convert a monolith into a microservice you might end up with a microlith
- Which is just a single-instance service of several monoliths that communicates with synchronous protocols using CRUD through JPA talking to a SQL database
- This still can't be scalable because it is a single instance application
# Microservices come in systems
> One microservice is no microservice. Microservices come in systems.

The difficulty in microservices design is managing the space between the services.

Embrace uncertainty - once we exit the boundary of the single-service instance, we enter the world of distributed systems
- Where systems fail in spectacular ways
- Where data gets lost
One constraint of distributed systems is that ==information has latency==, and this means that there is a high cost to maintain the illusion of a single `now`
- the cure is enjoy the silence - minimize the service-to-service communication and coordination of state
- ACID 2.0 for consistent protocol design 
	- Associative: grouping of messages does not matter and allows for batching
	- Commutative: ordering of message does not matter
	- Idempotent: duplication of the message does not matter
	- Distributed: added for ACID acronym
# Chapter 4: Events first domain driven design
Shifted the focus from nouns to verbs in the domain. This helps us to understand how change propagates in the system
- Communication patterns
- Workflow
- Figuring out who is talking to whom
- Who is responsible for what data
Forces you to think about the behavior of the system as opposed to the structure inside the system
- Use event storming to collect the facts by distilling the essence of the domain through events and commands
Be conservative in what you do, but liberal in what you accept from others

> I didn't really understand this chapter
# Chapter 5: Toward reactive microsystems
Reactive system takes a holistic view on system design, focusing on keeping distributed systems responsive by making them resilient and elastic.
- Message driven, based upon asynchronous message passing
- Allowing for elasticity, location transparency, isolation, supervision and self healing

While reactive programming is a technique for making individual components performant and efficient
- i.e. Akka streams

Reactive Programming
- Essential to the design of microservices
- Asynchronous and nonblocking I/O can eliminate the biggest threat to scaling - contention
	- A process should not hold a thread hostage
	- Blocking call holds the underlying thread hostage while waiting for a response, this is not efficient 
	- Reconsider using synchronous HTTP (with REST), because it introduces strong coupling between services
	- Asynchronous messaging makes a much better default for communication like pub/sub messaging over a message broker like Kafka or AWS Kinesis
- Embrace streaming, and reacting as data arrive 
- Apply back-pressure
	- Having a backchannel where the consumer can manage control flow by communicating with the producer
- At someone else's mercy
	- Wrap dangerous call in a circuit breaker to ensure it doesn't crash our service

Reactive Systems
- A set of principles for building modern distributed systems that are well prepared to meet the demands of responsiveness after failure (resilience) and under load (elasticity)
- Provides responsiveness as value, elastic and resilient as forms and message drive as the means
- **Asynchronous message passing** is the key to loosely coupled systems so the communication flow between them is independent of time and space

Microservices needs to come as systems and that is the full transition from monolith to microsystems
- 