const { useState, useEffect, useCallback } = React;

const CURRICULUM = [
  {
    id:"phase-1",num:"01",title:"C++ Fundamentals",duration:"2–3 weeks",tag:"BASICS",color:"#22d3ee",
    topics:[
      {id:"t01",name:"Setup & Environment",subs:["Install GCC / MinGW / Clang compiler","VS Code with C/C++ + Code Runner extensions","Online IDEs: Replit, GFG IDE, LeetCode","Hello World program","Compile & run: g++ file.cpp -o out && ./out","Basic debugging with cout statements"]},
      {id:"t02",name:"Variables & Data Types",subs:["int, float, double, long long, char, bool","unsigned int, unsigned long long","sizeof() operator","Integer overflow & underflow awareness","Explicit & implicit type casting","Constants: const, #define, constexpr","auto keyword (C++11)"]},
      {id:"t03",name:"Operators",subs:["Arithmetic: +  -  *  /  %","Relational: ==  !=  <  >  <=  >=","Logical: &&  ||  !","Bitwise: &  |  ^  ~  <<  >>","Assignment: =  +=  -=  *=  /=  %=","Prefix & postfix increment/decrement","Ternary operator: condition ? a : b","Operator precedence & associativity table"]},
      {id:"t04",name:"Input / Output",subs:["cin and cout basics","printf and scanf (C-style)","getline() for full line input","cin.ignore() and cin.clear()","Fast I/O: ios_base::sync_with_stdio(false); cin.tie(NULL)","iomanip: setw, setprecision, fixed, left/right"]},
      {id:"t05",name:"Control Flow",subs:["if / else if / else","Nested if-else","switch-case with break & default","Ternary shorthand for simple conditions","for loop (init; condition; update)","while loop","do-while loop","break and continue","Range-based for (for auto x : arr) — C++11"]},
      {id:"t06",name:"Functions",subs:["Function declaration & definition","Return types & void functions","Pass by value","Pass by reference (int &x)","Default arguments","Function overloading","Inline functions","Local vs global scope & lifetime","Recursion: factorial, fibonacci, sum"]},
      {id:"t07",name:"Arrays & Strings",subs:["1D array declaration & initialization","Array traversal, access, modification","2D arrays (matrix representation)","Passing arrays to functions (pointer decay)","C-style strings (char array & null terminator)","C++ string class","String methods: length, substr, find, append, erase, replace","stoi(), stoll(), to_string(), stod(), stof()","Character functions: isalpha, isdigit, isspace, toupper, tolower"]},
      {id:"t08",name:"Pointers & References",subs:["Pointer declaration: int *p","Address-of operator &","Dereferencing operator *","Null pointer: nullptr","Pointer arithmetic: p+1, p-1","Pointer to array elements","Double pointer **","Reference variables: int &r = x","Pass by pointer vs pass by reference"]},
      {id:"t09",name:"Memory Management",subs:["Stack vs Heap memory model","Dynamic allocation: new & delete","Dynamic arrays: new int[n]","Memory leaks and how to prevent them","RAII (Resource Acquisition Is Initialization)","Smart pointers: unique_ptr, shared_ptr, weak_ptr (concept)"]},
      {id:"t10",name:"OOP in C++",subs:["Class definition & object creation","Access modifiers: public, private, protected","Default, parameterized & copy constructors","Destructors (~ClassName)","this pointer","Static data members & static methods","Single inheritance","Multiple & multilevel inheritance","Method overloading (compile-time polymorphism)","Virtual functions (runtime polymorphism)","Pure virtual functions & abstract classes","Encapsulation, Abstraction, Inheritance, Polymorphism"]},
    ]
  },
  {
    id:"phase-2",num:"02",title:"C++ STL — Standard Template Library",duration:"1 week",tag:"STL",color:"#a78bfa",
    topics:[
      {id:"t11",name:"Vectors",subs:["Declaration: vector<int> v, vector<int> v(n,0)","push_back(), pop_back(), insert(), erase()","Access: v[i], v.at(i), v.front(), v.back()","size(), empty(), resize(), reserve(), clear()","2D vectors: vector<vector<int>>","Vector of pairs: vector<pair<int,int>>","Iterating: index loop, range-for, iterator"]},
      {id:"t12",name:"Pairs & Tuples",subs:["pair<T1,T2> and make_pair()","Accessing: .first and .second","vector<pair<int,int>> — very common pattern","Sort vector of pairs (default sorts by first)","tuple<T1,T2,T3> and make_tuple()","Access tuple elements: get<0>(t), get<1>(t)","Structured bindings: auto [a,b] = p (C++17)"]},
      {id:"t13",name:"Iterators & Auto",subs:["begin() and end()","rbegin() and rend() (reverse iterators)","auto keyword for iterator types","Range-based for: for(auto& x : v)","Iterator arithmetic: it+n, distance(a,b)","Iterator categories: input, forward, bidirectional, random-access"]},
      {id:"t14",name:"Map",subs:["map<K,V>: ordered (BST), O(log n) ops","unordered_map<K,V>: hash table, O(1) avg","multimap<K,V>: allows duplicate keys","Insert: m[key]=val, m.insert({k,v}), m.emplace(k,v)","Access & lookup: m.find(k), m.count(k), m.at(k)","Erase: m.erase(key), m.erase(iterator)","Iterate: for(auto& [k,v] : m)","map vs unordered_map: order vs speed tradeoff"]},
      {id:"t15",name:"Set",subs:["set<T>: ordered, unique elements, O(log n)","unordered_set<T>: hash, O(1) avg, no order","multiset<T>: ordered, allows duplicates","insert(), find(), erase(), count()","lower_bound(x) — iterator to first ≥ x","upper_bound(x) — iterator to first > x","Set iteration in sorted order","set vs unordered_set tradeoffs"]},
      {id:"t16",name:"Stack, Queue & Deque",subs:["stack<T>: push, pop, top, empty, size","queue<T>: push, pop, front, back, empty","deque<T>: push_front, push_back, pop_front, pop_back","priority_queue<T>: max heap by default","Min heap: priority_queue<int,vector<int>,greater<int>>","Custom comparator with struct/lambda","Choosing the right container for the problem"]},
      {id:"t17",name:"STL Algorithms (<algorithm>)",subs:["sort(begin, end) — O(n log n)","stable_sort() — preserves equal element order","reverse(begin, end)","min(), max(), min_element(), max_element()","binary_search(begin, end, val) — returns bool","lower_bound() & upper_bound() — return iterators","find() — linear search, returns iterator","count() — count occurrences in range","accumulate(begin, end, init) — from <numeric>","unique() — remove consecutive duplicates","next_permutation(), prev_permutation()","fill(), iota(), rotate(), shuffle()","Custom comparators with lambda: sort(v.begin(),v.end(),[](int a,int b){return a>b;})"]},
    ]
  },
  {
    id:"phase-3",num:"03",title:"Maths for DSA + Complexity",duration:"1 week",tag:"MATH",color:"#fbbf24",
    topics:[
      {id:"t18",name:"Complexity Analysis",subs:["Big O notation: O(1) O(log n) O(n) O(n log n) O(n²) O(2ⁿ)","Best, average, worst case scenarios","Space complexity analysis","Recurrence relations: T(n) = 2T(n/2) + n","Master theorem for recurrences","Amortized analysis (vector push_back example)","Recognising complexity from code structure"]},
      {id:"t19",name:"Number Theory",subs:["Prime check: O(√n) trial division","Sieve of Eratosthenes O(n log log n)","Segmented Sieve for large ranges","GCD using Euclidean algorithm: gcd(a,b) = gcd(b, a%b)","LCM = (a × b) / gcd(a, b)","Extended Euclidean algorithm","Count of prime factors of n","Sum of divisors of n","Euler's Totient function φ(n)","__gcd() in STL"]},
      {id:"t20",name:"Modular Arithmetic",subs:["(a + b) % m = ((a%m) + (b%m)) % m","(a * b) % m = ((a%m) * (b%m)) % m","Why % can give negative results in C++","Modular inverse using Fermat's little theorem","Modular exponentiation: (base^exp) % mod","Chinese Remainder Theorem (concept)"]},
      {id:"t21",name:"Fast Exponentiation",subs:["Naive power: O(n) multiplications","Binary exponentiation: O(log n)","Implement: while(exp > 0) with exp >>= 1","Modular exponentiation implementation","Matrix exponentiation for linear recurrences (concept)"]},
      {id:"t22",name:"Bit Manipulation",subs:["Binary representation of integers","AND & OR | XOR ^ NOT ~ operators","Left shift << (×2) and Right shift >> (÷2)","Check bit i is set: (n >> i) & 1","Set bit i: n | (1 << i)","Clear bit i: n & ~(1 << i)","Toggle bit i: n ^ (1 << i)","__builtin_popcount(n) — count set bits","Brian Kernighan's: n & (n-1) removes lowest set bit","Check power of 2: n > 0 && (n & (n-1)) == 0","Lowest set bit: n & (-n)","XOR tricks: find single number, missing number","Bitmasking to represent subsets"]},
      {id:"t23",name:"Combinatorics",subs:["Factorial and its overflow handling","Permutations: nPr = n! / (n-r)!","Combinations: nCr = n! / (r! × (n-r)!)","Pascal's Triangle for precomputing nCr","Catalan number: Cn = C(2n,n)/(n+1)","Stars and bars (distributing items)","Inclusion-exclusion principle","Pigeonhole principle applications"]},
    ]
  },
  {
    id:"phase-4",num:"04",title:"Recursion & Backtracking",duration:"2 weeks",tag:"RECURSION",color:"#34d399",
    topics:[
      {id:"t24",name:"Recursion Basics",subs:["Call stack visualization & memory","Base case and recursive case","Print 1 to N (forward & backward)","Factorial — iterative vs recursive","Fibonacci: naive O(2ⁿ) vs memoized","Sum of digits","Power function: a^b recursively","Reverse a string recursively","Check palindrome using recursion","GCD using recursion","Count occurrences in array recursively"]},
      {id:"t25",name:"Intermediate Recursion",subs:["Tower of Hanoi — understanding 3-step logic","Print all subsequences of array","Print all subsets (power set 2ⁿ subsets)","Generate all permutations of a string","Generate all permutations of an array","Count subsets with given sum (recursive)","Merge sort — recursive divide & conquer","Quick sort — recursive partition","Binary search — recursive version","Flatten nested structure recursively"]},
      {id:"t26",name:"Backtracking",subs:["Backtracking template: try → recurse → undo","N-Queens problem: place queens on N×N board","Rat in a maze (find path)","Sudoku solver (constraint propagation)","Word search in 2D grid","Combination sum I (with repetition allowed)","Combination sum II (no repetition, no duplicate sets)","Subset sum (all subsets summing to target)","Letter combinations of phone number","Generate all valid parentheses","Palindrome partitioning","M-coloring of graph"]},
    ]
  },
  {
    id:"phase-5",num:"05",title:"Arrays & Strings",duration:"2–3 weeks",tag:"ARRAYS",color:"#fb7185",
    topics:[
      {id:"t27",name:"Array Techniques",subs:["Prefix sum array O(n) build, O(1) query","Difference array for range updates","Suffix sum array","Kadane's algorithm — maximum subarray sum","Dutch National Flag — 3-way partition (0s, 1s, 2s)","Boyer-Moore voting — majority element O(1) space","Two pointer technique (sorted array pair sum, etc.)","Sliding window fixed size (max sum of k elements)","Sliding window variable size (smallest subarray > target)","Next greater element using monotonic stack","Merge intervals","Stock buy-sell I (1 transaction)","Stock buy-sell II (unlimited transactions)"]},
      {id:"t28",name:"Sorting Algorithms",subs:["Bubble sort O(n²) — compare adjacent","Selection sort O(n²) — find min each pass","Insertion sort O(n²) — adaptive, good for nearly sorted","Merge sort O(n log n) — stable, divide & conquer","Quick sort O(n log n) avg, O(n²) worst — partition","Heap sort O(n log n) — in-place, uses max heap","Counting sort O(n+k) — non-comparison, integers","Radix sort O(nk) — digit by digit","Stability concept — which sorts are stable","When to choose each sort in practice","Custom sort with comparator / lambda"]},
      {id:"t29",name:"Binary Search & Variants",subs:["Classic binary search on sorted array O(log n)","Find first occurrence (leftmost position)","Find last occurrence (rightmost position)","Lower bound — first position ≥ target","Upper bound — first position > target","Binary search on answer (search space problems)","Find peak element in array","Search in rotated sorted array","Find minimum in rotated sorted array","Sqrt of a number (integer binary search)","Kth smallest in sorted matrix","Median of two sorted arrays O(log(min(m,n)))","Aggressive cows / painter's partition / book allocation"]},
      {id:"t30",name:"String Algorithms",subs:["String matching brute force O(n×m)","KMP: failure function + matching O(n+m)","Z-algorithm: Z-array construction O(n+m)","Rabin-Karp: rolling hash matching","Anagram check (sort or frequency array)","Valid palindrome check","Longest palindromic substring — expand center O(n²)","Manacher's algorithm O(n)","Minimum window substring (sliding window)","Group anagrams by sorted key","Count palindromic substrings","Longest Common Prefix of array of strings"]},
      {id:"t31",name:"Matrix Problems",subs:["Spiral order traversal","Rotate matrix 90° clockwise (transpose + reverse)","Transpose a matrix","Search in row+column sorted matrix O(n+m)","Set matrix zeroes (O(1) space trick)","Flood fill using BFS/DFS","Number of islands (BFS/DFS on grid)","Word search in matrix (backtracking)","Pascal's triangle generation","Maximal square of 1s in binary matrix (DP)"]},
    ]
  },
  {
    id:"phase-6",num:"06",title:"Linked Lists",duration:"1–2 weeks",tag:"LINKED LIST",color:"#38bdf8",
    topics:[
      {id:"t32",name:"Singly Linked List",subs:["Node: struct Node { int val; Node* next; };","Insert at beginning — O(1)","Insert at end — O(n)","Insert at position k","Delete from beginning","Delete from end","Delete by value","Delete by position","Traverse and print","Search for a value","Count length of list","Reverse — iterative (3 pointers)","Reverse — recursive"]},
      {id:"t33",name:"Doubly & Circular LL",subs:["DLL node: prev + data + next pointers","Insert at beginning and end in DLL","Delete from DLL (update both pointers)","Reverse a DLL","Circular singly linked list — traverse safely","Circular DLL","Detect end in circular LL"]},
      {id:"t34",name:"Two Pointer LL Patterns",subs:["Detect cycle — Floyd's tortoise and hare","Find starting node of cycle","Find middle node — slow/fast pointer","Remove Nth node from end (one pass)","Check if linked list is a palindrome","Distance between two nodes"]},
      {id:"t35",name:"Hard LL Problems",subs:["Merge two sorted linked lists","Merge K sorted lists (min heap)","Reverse in K groups","Copy list with random pointer (HashMap / 3-pass)","Find intersection of two LL (two pointers)","Flatten a multilevel linked list","Add two numbers represented as LL","Sort a linked list — merge sort O(n log n)","LRU Cache — DLL + unordered_map","Skip list (concept)"]},
    ]
  },
  {
    id:"phase-7",num:"07",title:"Stacks & Queues",duration:"1–2 weeks",tag:"STACK/QUEUE",color:"#e879f9",
    topics:[
      {id:"t36",name:"Stack — Basics & Implementation",subs:["Array-based stack implementation","Linked list-based stack","STL stack<T> — push, pop, top, empty, size","Valid / balanced parentheses","Evaluate postfix expression","Infix to postfix conversion","Infix to prefix conversion","Reverse a string using stack"]},
      {id:"t37",name:"Monotonic Stack Problems",subs:["Next greater element I & II","Next smaller element","Previous greater element","Previous smaller element","Stock span problem","Largest rectangle in histogram","Trapping rainwater — stack approach","Remove K digits to make smallest number","Sum of subarray minimums / maximums","132 pattern","Celebrity problem"]},
      {id:"t38",name:"Queue & Deque",subs:["Array-based queue","Circular queue (wrap-around logic)","STL queue<T> and deque<T>","BFS using queue","First non-repeating character in stream","Sliding window maximum — deque O(n)","Rotten oranges (multi-source BFS)","Design hit counter"]},
      {id:"t39",name:"Design Problems",subs:["Queue using 2 stacks","Stack using 2 queues","Min stack — O(1) getMin","Max stack — O(1) getMax","Design circular deque","Browser forward/back — two stacks","Design LRU Cache (DLL + HashMap)"]},
      {id:"t40",name:"Heaps — Priority Queues",subs:["Binary heap concept (complete binary tree)","Max heap: parent ≥ children","Min heap: parent ≤ children","Heapify up (insertion) & heapify down (extraction)","Build heap in O(n) — Floyd's method","Heap sort O(n log n) in-place","Kth largest element — min heap of size K","Kth smallest element — max heap of size K","Top K frequent elements","Merge K sorted arrays — min heap","Median from data stream — two heaps O(log n)","K closest points to origin","Task scheduler (greedy + heap)"]},
    ]
  },
  {
    id:"phase-8",num:"08",title:"Trees",duration:"3–4 weeks",tag:"TREES",color:"#4ade80",
    topics:[
      {id:"t41",name:"Binary Tree Basics",subs:["Node: struct Node { int val; Node *left, *right; };","Inorder traversal: left → root → right (recursive)","Preorder traversal: root → left → right (recursive)","Postorder traversal: left → right → root (recursive)","Level order traversal (BFS using queue)","Iterative inorder using stack","Height of binary tree","Size (total number of nodes)","Diameter of binary tree"]},
      {id:"t42",name:"Binary Tree Problems",subs:["Mirror / Invert a binary tree","Symmetric tree check","Identical trees check","Sum tree check","Root-to-leaf path printing","All root-to-leaf paths with target sum","LCA (Lowest Common Ancestor) — O(n)","Zigzag level order traversal","Boundary traversal of binary tree","Vertical order traversal","Left view, right view, top view, bottom view","Maximum path sum in binary tree","Check if tree is height-balanced O(n)","Count nodes in complete binary tree O(log²n)","Connect level-order siblings (next pointer)"]},
      {id:"t43",name:"Binary Search Tree (BST)",subs:["Insert in BST — O(h)","Search in BST — O(h)","Delete node in BST (3 cases)","Inorder of BST = sorted sequence","Validate BST (range method)","Floor in BST (largest ≤ key)","Ceil in BST (smallest ≥ key)","Kth smallest using inorder","Kth largest in BST","LCA in BST — O(h) exploiting BST property","Sorted array → balanced BST","BST to Greater Sum Tree (reverse inorder)","Merge two BSTs into sorted list","Two sum in BST (inorder + two pointers)"]},
      {id:"t44",name:"Segment Tree & BIT",subs:["Segment tree structure: 4×n array","Build segment tree O(n)","Range sum query O(log n)","Range min / max query","Point update O(log n)","Lazy propagation for range updates","Fenwick tree (BIT) — 1-indexed array","BIT point update and prefix sum query","2D BIT (concept)","Sparse table for O(1) RMQ (static)","Merge sort tree for range queries (concept)"]},
      {id:"t45",name:"Trie",subs:["TrieNode: array[26] of children or unordered_map","Insert word — O(L)","Search word — O(L)","Delete word from trie","startsWith(prefix) check","Count words with given prefix","Longest word in dictionary using trie","Longest common prefix (trie approach)","Replace words with shortest root","XOR Trie — maximum XOR of two elements","Bitwise trie for XOR pair"]},
    ]
  },
  {
    id:"phase-9",num:"09",title:"Graphs",duration:"3–4 weeks",tag:"GRAPHS",color:"#f97316",
    topics:[
      {id:"t46",name:"Graph Basics & Representation",subs:["Vertices, edges, directed vs undirected","Weighted vs unweighted edges","Adjacency matrix: int adj[V][V] — O(V²) space","Adjacency list: vector<vector<int>> — O(V+E) space","Edge list: vector<pair<int,int>>","Degree, in-degree, out-degree","Dense vs sparse graph representation","Reading graph input (N vertices, M edges)"]},
      {id:"t47",name:"BFS & DFS",subs:["BFS using queue — O(V+E)","DFS using recursion — O(V+E)","DFS using stack (iterative)","BFS / DFS on disconnected graph (all components)","Count connected components","Flood fill — BFS/DFS on 2D grid","Number of islands","Rotten oranges — multi-source BFS","Word ladder — BFS (unweighted shortest path)","Surrounded regions — DFS boundary check"]},
      {id:"t48",name:"Cycle Detection & Topological Sort",subs:["Cycle in undirected graph — BFS parent tracking","Cycle in undirected graph — DFS visited tracking","Cycle in directed graph — DFS 3-color (white/grey/black)","Cycle in directed graph — Kahn's algorithm","Topological sort using DFS (reverse postorder)","Topological sort — Kahn's algorithm (BFS + indegree)","Course schedule I & II","Alien dictionary (build graph + topo sort)","Sequence reconstruction","Parallel courses — minimum semesters"]},
      {id:"t49",name:"Shortest Paths",subs:["BFS for unweighted shortest path","Dijkstra's algorithm — O((V+E) log V) with min heap","Dijkstra: does NOT work with negative weights","Bellman-Ford — O(VE), handles negative weights","Detect negative cycle with Bellman-Ford","Floyd-Warshall — O(V³) all pairs shortest path","0-1 BFS using deque (weights 0 or 1)","Shortest path in DAG using topo sort + relax","Multi-source BFS (01 matrix distance)","Minimum effort path / swim in water / path with minimum max","Cheapest flights within K stops"]},
      {id:"t50",name:"MST & DSU",subs:["Minimum Spanning Tree definition","Prim's algorithm — greedy + min heap O((V+E) log V)","Kruskal's algorithm — sort edges + DSU O(E log E)","DSU Union by rank — O(log n) without compression","DSU Path compression — nearly O(1)","DSU with both: O(α(n)) inverse Ackermann","Cycle detection using DSU","Count connected components with DSU","Making network connected","Redundant connection","Minimum cost to connect all points (Prim's on dense)"]},
      {id:"t51",name:"Advanced Graph Algorithms",subs:["Bridges in graph — Tarjan's (discovery time + low)","Articulation points — Tarjan's algorithm","Strongly Connected Components — Kosaraju's (2 DFS)","SCC — Tarjan's (single DFS + stack)","Bipartite check — 2-coloring with BFS/DFS","Eulerian path condition & Hierholzer's algorithm","Eulerian circuit condition","Hamiltonian path — NP-hard (backtracking approach)","Transitive closure using Floyd-Warshall"]},
    ]
  },
  {
    id:"phase-10",num:"10",title:"Dynamic Programming",duration:"4–5 weeks",tag:"DP",color:"#818cf8",
    topics:[
      {id:"t52",name:"DP Fundamentals",subs:["Overlapping subproblems property","Optimal substructure property","Memoization: top-down recursion + cache","Tabulation: bottom-up table filling","Space optimization: rolling array","Identifying DP: choices + optimal substructure","Converting recursive to iterative DP","Time complexity analysis of DP solutions"]},
      {id:"t53",name:"1D DP",subs:["Fibonacci — memoized & tabulated & O(1) space","Climbing stairs (1 or 2 steps)","House robber I (no two adjacent)","House robber II (circular array)","Jump game I — can you reach end? (greedy or DP)","Jump game II — minimum jumps to end","Minimum cost climbing stairs","Decode ways (string to number mapping)","Longest Increasing Subsequence O(n²)","LIS using patience sorting O(n log n)","Longest Bitonic Subsequence","Maximum sum of non-adjacent elements"]},
      {id:"t54",name:"Knapsack Variants",subs:["0/1 Knapsack — include or skip item","Unbounded knapsack — unlimited item usage","Subset sum — can we form target?","Partition equal subset sum","Target sum — count subsets with difference","Coin change I — minimum coins","Coin change II — count number of ways","Rod cutting problem","Minimum subset sum difference","Count partitions with given difference"]},
      {id:"t55",name:"2D DP — Grid & Sequences",subs:["Grid: unique paths (no obstacles)","Grid: unique paths with obstacles","Grid: minimum path sum","Triangle: minimum path top to bottom","Chocolate pickup: 3D DP (two robots)","Edit distance (Levenshtein distance)","Longest Common Subsequence (LCS)","Longest Common Substring","Shortest Common Supersequence","Print the LCS string","Print SCS string"]},
      {id:"t56",name:"String DP",subs:["Longest Palindromic Subsequence","Minimum deletions to make string palindrome","Minimum insertions to make string palindrome","Count palindromic substrings","Count distinct subsequences","Wildcard matching: * matches any sequence","Regular expression matching: . and * rules","Longest repeating subsequence"]},
      {id:"t57",name:"Interval / Partition DP",subs:["Matrix chain multiplication — O(n³)","Burst balloons","Minimum cost to cut a stick","Palindrome partitioning I — all palindromic cuts","Palindrome partitioning II — minimum cuts","Egg drop problem — binary search + DP","Egg drop — O(n log n) approach","Strange printer","Zuma game"]},
      {id:"t58",name:"DP on Trees & Graphs",subs:["Maximum path sum in binary tree","Diameter using DP (combine left + right)","House robber III — no two adjacent in tree","DP on DAG — longest path","Count paths in DAG","Coloring problem on trees","Independent set on tree"]},
      {id:"t59",name:"Advanced DP",subs:["Bitmask DP — Traveling Salesman Problem O(2ⁿ × n²)","Digit DP — count numbers with property","SOS DP — sum over subsets O(n × 2ⁿ)","DP + binary search (LIS in O(n log n))","Convex hull trick / Li Chao tree (concept)","Knuth's optimization for interval DP (concept)","Profile DP — broken profile (concept)"]},
    ]
  },
  {
    id:"phase-11",num:"11",title:"Greedy Algorithms",duration:"1–2 weeks",tag:"GREEDY",color:"#2dd4bf",
    topics:[
      {id:"t60",name:"Classic Greedy",subs:["Activity selection problem — sort by end time","Job scheduling with deadlines & profits (max heap)","Fractional knapsack — value/weight ratio","Minimum number of platforms (sort + two pointer)","N meetings in one room","Huffman encoding — greedy tree building","Egyptian fraction"]},
      {id:"t61",name:"Interval & Array Greedy",subs:["Merge overlapping intervals","Non-overlapping intervals — minimum removal","Meeting rooms II — minimum number of rooms","Insert interval into sorted list","Minimum arrows to burst balloons","Jump game variants","Gas station — circular route","Candy distribution — two pass","Minimum domino rotations"]},
      {id:"t62",name:"String & Number Greedy",subs:["Largest number from array (custom comparator)","Assign cookies — greedy match","Partition labels — last occurrence tracking","Minimum cost to connect ropes (min heap)","Task scheduler with cooldown","Reorganize string — most frequent first","Lemonade change","Remove duplicate letters (monotonic stack + greedy)"]},
    ]
  },
  {
    id:"phase-12",num:"12",title:"Advanced Topics",duration:"3–4 weeks",tag:"ADVANCED",color:"#f43f5e",
    topics:[
      {id:"t63",name:"Advanced String Algorithms",subs:["KMP failure function — detailed derivation","Z-function: build Z-array O(n)","Aho-Corasick: multi-pattern matching O(n+m+z)","Suffix array O(n log n) — SA-IS or prefix doubling","LCP array from suffix array — Kasai's algorithm","Applications: longest repeated substring, string period","Manacher's algorithm — O(n) all palindromic substrings","Suffix automaton (SAM) — concept"]},
      {id:"t64",name:"Advanced Trees & Range Queries",subs:["Segment tree with lazy propagation (range assign, range add)","Persistent segment tree — O(log n) per version","Sqrt decomposition for range queries O(√n)","Sparse table O(n log n) build, O(1) RMQ","Heavy-Light Decomposition (path queries on tree)","Centroid decomposition — O(n log n) path problems","Link-Cut Trees (concept only)","2D segment tree (concept)"]},
      {id:"t65",name:"Advanced Graph & Network Flow",subs:["Max flow — Ford-Fulkerson with BFS (Edmonds-Karp) O(VE²)","Max flow — Dinic's algorithm O(V²E)","Min cut — Max flow theorem","Minimum cost flow (concept)","Bipartite matching — Hopcroft-Karp O(E√V)","Eulerian path — Hierholzer's algorithm","Minimum vertex cover (König's theorem)","Minimum path cover in DAG"]},
      {id:"t66",name:"Competitive Programming Topics",subs:["Two pointers advanced patterns","Mo's algorithm — offline range queries O((n+q)√n)","Merge sort tree — range frequency queries","Meet in the middle — O(2^(n/2))","Game theory: Nim game and Grundy numbers","Sprague-Grundy theorem","Randomized algorithms: treap, skip list (concept)","Offline vs online queries trade-offs","Square root decomposition variants","Fractional cascading (concept)"]},
    ]
  },
];

function getSubId(phaseId, topicId, i) { return `${phaseId}-${topicId}-${i}`; }

const totalSubs = CURRICULUM.reduce((a, p) => a + p.topics.reduce((b, t) => b + t.subs.length, 0), 0);

function DSAChecklist() {
  const [checked, setChecked] = useState(new Set());
  const [openPhases, setOpenPhases] = useState(new Set(["phase-1"]));
  const [openTopics, setOpenTopics] = useState(new Set());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("dsa-cpp-v3");
        if (r?.value) setChecked(new Set(JSON.parse(r.value)));
      } catch {}
      setLoaded(true);
    })();
  }, []);

  const save = useCallback(async (s) => {
    try { await window.storage.set("dsa-cpp-v3", JSON.stringify([...s])); } catch {}
  }, []);

  const toggleSub = useCallback((pId, tId, i) => {
    const id = getSubId(pId, tId, i);
    setChecked(prev => {
      const n = new Set(prev);
      n.has(id) ? n.delete(id) : n.add(id);
      save(n); return n;
    });
  }, [save]);

  const toggleTopic = useCallback((pId, tId, len) => {
    const ids = Array.from({length: len}, (_, i) => getSubId(pId, tId, i));
    setChecked(prev => {
      const n = new Set(prev);
      const all = ids.every(id => n.has(id));
      ids.forEach(id => all ? n.delete(id) : n.add(id));
      save(n); return n;
    });
  }, [save]);

  const phaseProgress = (p) => {
    const total = p.topics.reduce((a, t) => a + t.subs.length, 0);
    const done = p.topics.reduce((a, t) =>
      a + t.subs.filter((_, i) => checked.has(getSubId(p.id, t.id, i))).length, 0);
    return { done, total, pct: total ? Math.round(done/total*100) : 0 };
  };

  const done = checked.size;
  const pct = Math.round(done / totalSubs * 100);

  if (!loaded) return (
    <div style={{background:"#060811",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'JetBrains Mono',monospace",color:"#22d3ee",fontSize:"13px"}}>
      Loading your progress...
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        body{background:#060811}
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:#060811}
        ::-webkit-scrollbar-thumb{background:#21262d;border-radius:3px}
        .ph-hd:hover{background:rgba(255,255,255,0.025)!important}
        .tp-hd:hover{background:rgba(255,255,255,0.018)!important}
        .sb-row:hover{background:rgba(255,255,255,0.03)!important;border-radius:4px}
        .chk-box{transition:all 0.15s ease}
        .chk-box:hover{filter:brightness(1.2)}
      `}</style>
      <div style={{background:"#060811",minHeight:"100vh",fontFamily:"'JetBrains Mono',monospace",color:"#e2e8f0",padding:"20px 16px",maxWidth:"880px",margin:"0 auto"}}>

        {/* ── Header ── */}
        <div style={{marginBottom:"20px"}}>
          <div style={{fontSize:"18px",fontWeight:"700",color:"#f0f6fc",letterSpacing:"-0.03em",marginBottom:"2px"}}>
            C++ + DSA Complete Roadmap
          </div>
          <div style={{fontSize:"11px",color:"#484f58",marginBottom:"16px"}}>
            {CURRICULUM.length} phases · {CURRICULUM.reduce((a,p)=>a+p.topics.length,0)} topics · {totalSubs} subtopics · progress saved automatically
          </div>

          {/* Overall bar */}
          <div style={{background:"#0d1117",border:"1px solid #21262d",borderRadius:"10px",padding:"14px 16px"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:"10px"}}>
              <span style={{fontSize:"12px",color:"#8b949e"}}>Overall Progress</span>
              <span style={{fontSize:"16px",fontWeight:"700",color: pct===100?"#4ade80":"#22d3ee"}}>{pct}%</span>
            </div>
            <div style={{height:"6px",background:"#21262d",borderRadius:"3px",overflow:"hidden",marginBottom:"8px"}}>
              <div style={{width:`${pct}%`,height:"100%",background:"linear-gradient(90deg,#22d3ee,#818cf8,#f43f5e)",borderRadius:"3px",transition:"width 0.4s ease"}}/>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",fontSize:"11px",color:"#484f58"}}>
              <span>{done} completed</span>
              <span>{totalSubs - done} remaining</span>
            </div>
          </div>

          {/* Phase overview pills */}
          <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginTop:"12px"}}>
            {CURRICULUM.map(p => {
              const pr = phaseProgress(p);
              return (
                <div key={p.id}
                  onClick={() => setOpenPhases(prev => { const n=new Set(prev); n.has(p.id)?n.delete(p.id):n.add(p.id); return n; })}
                  style={{fontSize:"10px",padding:"3px 10px",borderRadius:"20px",cursor:"pointer",border:`1px solid ${pr.pct===100?p.color:"#21262d"}`,color:pr.pct>0?p.color:"#484f58",background:pr.pct===100?`${p.color}15`:"transparent",fontWeight:pr.pct>0?"600":"400",transition:"all 0.2s"}}>
                  {p.num} {pr.pct}%
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Phase Cards ── */}
        {CURRICULUM.map(phase => {
          const pr = phaseProgress(phase);
          const isOpen = openPhases.has(phase.id);
          return (
            <div key={phase.id} style={{background:"#0d1117",border:`1px solid ${pr.pct>0?phase.color+"30":"#21262d"}`,borderRadius:"10px",marginBottom:"8px",overflow:"hidden",transition:"border-color 0.3s"}}>

              {/* Phase Header */}
              <div className="ph-hd"
                onClick={() => setOpenPhases(prev=>{const n=new Set(prev);n.has(phase.id)?n.delete(phase.id):n.add(phase.id);return n;})}
                style={{display:"flex",alignItems:"center",gap:"12px",padding:"12px 16px",cursor:"pointer",borderLeft:`3px solid ${phase.color}`,userSelect:"none"}}>
                <span style={{fontSize:"11px",fontWeight:"700",color:phase.color,minWidth:"22px",opacity:0.7}}>{phase.num}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:"13px",fontWeight:"600",color:"#f0f6fc",letterSpacing:"-0.01em"}}>{phase.title}</div>
                  <div style={{fontSize:"10px",color:"#484f58",marginTop:"1px"}}>{phase.duration} · {phase.topics.length} topics</div>
                </div>
                <div style={{textAlign:"right",marginRight:"10px"}}>
                  <div style={{fontSize:"13px",fontWeight:"700",color:pr.pct===100?"#4ade80":pr.pct>0?phase.color:"#30363d"}}>{pr.pct}%</div>
                  <div style={{fontSize:"10px",color:"#30363d"}}>{pr.done}/{pr.total}</div>
                </div>
                <span style={{color:"#30363d",transform:isOpen?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.2s",fontSize:"12px"}}>▶</span>
              </div>

              {/* Phase Body */}
              {isOpen && (
                <div>
                  {/* Phase progress bar */}
                  <div style={{padding:"8px 16px 10px",borderBottom:"1px solid #161b22"}}>
                    <div style={{height:"3px",background:"#161b22",borderRadius:"2px",overflow:"hidden"}}>
                      <div style={{width:`${pr.pct}%`,height:"100%",background:phase.color,borderRadius:"2px",transition:"width 0.4s ease"}}/>
                    </div>
                  </div>

                  {/* Topics */}
                  {phase.topics.map((topic, ti) => {
                    const subsChecked = topic.subs.filter((_,i)=>checked.has(getSubId(phase.id,topic.id,i))).length;
                    const allDone = subsChecked===topic.subs.length;
                    const partDone = subsChecked>0 && !allDone;
                    const tKey = `${phase.id}-${topic.id}`;
                    const tOpen = openTopics.has(tKey);
                    return (
                      <div key={topic.id} style={{borderBottom:ti<phase.topics.length-1?"1px solid #161b22":"none"}}>

                        {/* Topic header */}
                        <div className="tp-hd"
                          style={{display:"flex",alignItems:"center",gap:"10px",padding:"9px 16px",cursor:"pointer",userSelect:"none",background:allDone?`${phase.color}08`:"transparent",transition:"background 0.2s"}}>
                          {/* Check all box */}
                          <div className="chk-box"
                            onClick={(e)=>{e.stopPropagation();toggleTopic(phase.id,topic.id,topic.subs.length);}}
                            style={{width:"15px",height:"15px",borderRadius:"3px",border:`1.5px solid ${allDone?phase.color:partDone?phase.color+"80":"#30363d"}`,background:allDone?phase.color:partDone?`${phase.color}25`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",color:"#060811",flexShrink:0,cursor:"pointer"}}>
                            {allDone?"✓":partDone?"–":""}
                          </div>
                          {/* Topic name */}
                          <span
                            onClick={()=>setOpenTopics(prev=>{const n=new Set(prev);n.has(tKey)?n.delete(tKey):n.add(tKey);return n;})}
                            style={{fontSize:"12px",fontWeight:"500",color:allDone?`${phase.color}99`:partDone?"#c9d1d9":"#8b949e",flex:1,letterSpacing:"-0.01em"}}>
                            {topic.name}
                          </span>
                          {/* Count */}
                          <span
                            onClick={()=>setOpenTopics(prev=>{const n=new Set(prev);n.has(tKey)?n.delete(tKey):n.add(tKey);return n;})}
                            style={{fontSize:"10px",color:subsChecked>0?phase.color:"#30363d",fontWeight:"600",minWidth:"28px",textAlign:"right"}}>
                            {subsChecked}/{topic.subs.length}
                          </span>
                          <span
                            onClick={()=>setOpenTopics(prev=>{const n=new Set(prev);n.has(tKey)?n.delete(tKey):n.add(tKey);return n;})}
                            style={{color:"#30363d",transform:tOpen?"rotate(90deg)":"rotate(0deg)",transition:"transform 0.15s",fontSize:"10px",cursor:"pointer",marginLeft:"4px"}}>▶</span>
                        </div>

                        {/* Subtopics */}
                        {tOpen && (
                          <div style={{padding:"4px 16px 10px 42px"}}>
                            {topic.subs.map((sub, si) => {
                              const sid = getSubId(phase.id, topic.id, si);
                              const isdone = checked.has(sid);
                              return (
                                <div key={si} className="sb-row"
                                  onClick={()=>toggleSub(phase.id,topic.id,si)}
                                  style={{display:"flex",alignItems:"flex-start",gap:"8px",padding:"4px 6px",cursor:"pointer",transition:"background 0.1s"}}>
                                  <div className="chk-box"
                                    style={{width:"12px",height:"12px",borderRadius:"2px",border:`1.5px solid ${isdone?phase.color:"#21262d"}`,background:isdone?phase.color:"transparent",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"8px",color:"#060811",marginTop:"2px"}}>
                                    {isdone&&"✓"}
                                  </div>
                                  <span style={{fontSize:"11px",color:isdone?"#30363d":"#6e7681",textDecoration:isdone?"line-through":"none",lineHeight:"1.55",letterSpacing:"-0.005em"}}>
                                    {sub}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div style={{textAlign:"center",fontSize:"10px",color:"#21262d",padding:"20px 0 8px"}}>
          {done} of {totalSubs} subtopics completed · progress auto-saved
        </div>
      </div>
    </>
  );
}

window.DSAChecklist = DSAChecklist;
