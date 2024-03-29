As someone who learned data science on the fly with each job, I am always confused about all the different layers of technology a typical data science stack is comprised of. 
There are so many interchanging parts and sub-features replacements it is always a spaghetti mess in my head. 
Just look at this diagram! 
Working as data scientist full time for that past few months, I hope to straighten some concepts out in my head.

The most straight forward analogy that I have in my mind is mapping the layers to a traditional warehouse system with objects, containers, cabinets, clerks, and supervisor.
And to run this warehouse efficiently you want each component of the system to be compatible with each other and suited for the type of item your warehouse is storing.

Starting from the lowest level with the objects themselves, this layer deals with how raw data is stored. 
Data storage for a warehouse can be in various forms like seeds in a vault, vials of samples in a hospital paper and forms for medical records at the dentist, or copies of receipts at a restaurant. 
Depending on the frequency of need to retrieve and read the data or the size consideration of the data there are some trade-offs between the most common technology used in this layer: CSV, JSON, parquet. 
The pros and cons of these file format is the trade-off between human usability and computation performance. 
In general, if the file format is easy for you to read and edit then it is probably not very computationally efficient for the overall data stack. 
A good breakdown of these three file types [article](https://luminousmen.com/post/big-data-file-formats)

There is an additional consideration that comes with data redundancy and that is how many copies should the warehouse store? 
In the Hadoop ecosystem (one of the most popular data science environments) the de facto system is HDFS or Hadoop Distributed File System. 
The other popular alternative is S3 or Amazon's Simple Storage System. 
HDFS was built for fault tolerance by distributing the files across multiple machines automatically so if one machine dies or files becomes corrupted there are always backups. 
So imagine several filing cabinets with the same information. 
S3 was built for scalability by storing objects with keys, kind of like each cabinet stores a "bucket" of information.
Usually people prefer to use HDFS for on-prem use cases because it allows horizontal scaling by adding more machines as opposed to vertical scaling by replacing servers with better ones
But because S3 is an object storage it is a bit like a binder with lots of pages inside compared to HDFS which is like lots of folders good labelling. It makes the search process much faster

Once we know the data is being stored we need to organize it in a way that it is easy to access, kind of like a library with good signs that helps the reader to head towards the right direction.
An example technology that is used for this is Hive Metastore, others include Apache Iceberg, AWS Glue
These basically organize the data into a structured way that users can more easily navigate

Then moving up to data retrieval, probably the most important aspect of the stack. 
This layer is analogous to the workers or clerks physically finding and retrieving the items. 
Individual workers probably has some way of looking up the files they need, maybe they retrieve in order of what they need, maybe the categorize the requests first so they can retrieve all the files in the same cabinet. 
These different kinds of data retrieval methods are similar to Spark Core and Mapreduce

Lastly, there is supervisor that is running the warehouse, they assign schedules to the workers to ensure that they meet the demand and are not understaffed.
This is equivalent to YARN or Mesos which are resource management technologies.

All together these layers form a typical data warehouse stack that many companies and data scientists use.