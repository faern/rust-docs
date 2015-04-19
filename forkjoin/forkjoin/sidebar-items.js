initSidebarItems({"enum":[["AlgoStyle","Enum representing the style of the executed algorithm."],["ResultReceiver","Enum describing what to do with results of `Task`s and `JoinBarrier`s."],["SupervisorMsg","Messages from `ForkPool` and `WorkerThread` to the `PoolSupervisor`."],["TaskResult","Return values from tasks. Represent a computed value or a fork of the algorithm."],["WorkerMsg","Messages from the `PoolSupervisor` to `WorkerThread`s"]],"struct":[["Fork","Struct describing how a `Task` want to fork into multiple subtasks."],["ForkPool","Main struct of the ForkJoin library. Represents a pool of threads implementing a work stealing algorithm."],["JoinBarrier","Internal struct for receiving results from multiple subtasks in parallel"],["Task",""]],"type":[["TaskFun","Type definition of the main function in a task. Your task functions must have this signature"],["TaskJoin","Type definition of functions joining together forked results. Only used in `AlgoStyle::Summa` algorithms."]]});