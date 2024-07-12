MIT Open Course Ware: MIT 6.851
Professor: Erik Demaine
Link: https://www.youtube.com/watch?v=T0yzrZL1py0&list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf

Covers: time travel, geometry, dynamic optimality, memory hierarchy, hashing, integers, strings, dynamic graphs, succinct
# Persistent Data Structures
- one kind of models of computation is - pointer machine 
	- a node of fields that points to other nodes of fields
	- allow operations 
	- has a root node and everything done is with respect to the root node
- temporal data structure takes the pointer machine and add cool stuff to it
	- persistence - branching universe 
	- retroactivity - single timeline universe
- persistence
	- keep all versions of the data structure
	- all operations are relative to the specified version
	- update makes and returns a new version
	- 4 levels of persistence
		- partial persistence
			- only allowed to update the *latest* version
			- versions are *linearly ordered*
			- can query the old versions but you can't change them
		- full persistence
			- you can update *any* version
			- versions are *tree structured*