import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Download, Copy, Check, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyDetail = () => {
  const { id } = useParams();
  const [copiedIndex, setCopiedIndex] = useState(null);
  
  const isInternship = parseInt(id) < 100;
  
  // Sample DSA questions - in a real app, this would come from an API
  const dsaQuestions = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      solution: `def two_sum(nums, target):
    hash_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in hash_map:
            return [hash_map[complement], i]
        hash_map[num] = i
    return []

# Time Complexity: O(n)
# Space Complexity: O(n)`,
      tags: ["Array", "Hash Table"]
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "Easy",
      description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      solution: `def is_valid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack

# Time Complexity: O(n)
# Space Complexity: O(n)`,
      tags: ["Stack", "String"]
    },
    {
      id: 3,
      title: "Binary Tree Level Order Traversal",
      difficulty: "Medium",
      description: "Given the root of a binary tree, return the level order traversal of its nodes' values.",
      solution: `from collections import deque

def level_order(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

# Time Complexity: O(n)
# Space Complexity: O(w) where w is the maximum width`,
      tags: ["Tree", "BFS", "Binary Tree"]
    },
    {
      id: 4,
      title: "Merge Intervals",
      difficulty: "Medium",
      description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.",
      solution: `def merge(intervals):
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]
    
    for current in intervals[1:]:
        if current[0] <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], current[1])
        else:
            merged.append(current)
    
    return merged

# Time Complexity: O(n log n)
# Space Complexity: O(1)`,
      tags: ["Array", "Sorting"]
    },
    {
      id: 5,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      solution: `def length_of_longest_substring(s):
    char_set = set()
    left = 0
    max_len = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    
    return max_len

# Time Complexity: O(n)
# Space Complexity: O(min(m, n))`,
      tags: ["String", "Sliding Window", "Hash Table"]
    }
  ];

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const downloadAllSolutions = () => {
    const allSolutions = dsaQuestions.map(q => 
      `// ${q.title} - ${q.difficulty}\n// ${q.description}\n\n${q.solution}\n\n${'='.repeat(80)}\n\n`
    ).join('');
    
    const blob = new Blob([allSolutions], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${isInternship ? 'internship' : 'hiring'}_dsa_questions.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to={isInternship ? '/internships' : '/hiring-off-campus'}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to {isInternship ? 'Internships' : 'Hiring'}</span>
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {isInternship ? 'Internship' : 'Hiring'} DSA Questions
              </h1>
              <p className="text-xl text-gray-600">
                {isInternship ? '50 Essential' : '100 Important'} Data Structures & Algorithms Questions
              </p>
            </div>
            
            <motion.button
              onClick={downloadAllSolutions}
              className="mt-4 md:mt-0 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              <span>Download All Solutions</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Questions List */}
        <div className="space-y-6">
          {dsaQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                {/* Question Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <span className="text-2xl font-bold text-gray-800">
                      {question.id}.
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {question.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      question.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {question.difficulty}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => copyToClipboard(question.solution, index)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check size={16} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy Solution</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 text-lg">
                  {question.description}
                </p>

                {/* Solution */}
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{question.solution}</code>
                  </pre>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Load More Questions
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyDetail;