import React, { useState } from 'react';
import { Brain, Clock, CheckCircle, XCircle, RotateCcw, Trophy, Target } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface Subject {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: Question[];
}

const Quiz: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isQuizActive, setIsQuizActive] = useState(false);

  const subjects: Subject[] = [
    {
      id: 'os',
      name: 'Operating Systems',
      description: 'Test your knowledge of OS concepts, processes, and memory management',
      icon: '💾',
      color: 'from-blue-500 to-blue-600',
      questions: [
        {
          id: '1',
          question: 'What is a deadlock in operating systems?',
          options: [
            'A situation where processes are waiting indefinitely for resources',
            'A type of memory allocation',
            'A scheduling algorithm',
            'A file system error'
          ],
          correctAnswer: 0,
          explanation: 'A deadlock occurs when processes are blocked indefinitely, waiting for resources that are held by other processes.'
        },
        {
          id: '2',
          question: 'Which scheduling algorithm gives the shortest average waiting time?',
          options: [
            'First Come First Serve (FCFS)',
            'Shortest Job First (SJF)',
            'Round Robin',
            'Priority Scheduling'
          ],
          correctAnswer: 1,
          explanation: 'SJF provides the shortest average waiting time for a given set of processes.'
        },
        {
          id: '3',
          question: 'What is virtual memory?',
          options: [
            'Physical RAM only',
            'A memory management technique using secondary storage',
            'Cache memory',
            'ROM memory'
          ],
          correctAnswer: 1,
          explanation: 'Virtual memory allows the system to use secondary storage as if it were main memory.'
        }
      ]
    },
    {
      id: 'networking',
      name: 'Computer Networking',
      description: 'Evaluate your understanding of network protocols and architectures',
      icon: '🌐',
      color: 'from-green-500 to-green-600',
      questions: [
        {
          id: '1',
          question: 'What does TCP stand for?',
          options: [
            'Transfer Control Protocol',
            'Transmission Control Protocol',
            'Transport Control Protocol',
            'Terminal Control Protocol'
          ],
          correctAnswer: 1,
          explanation: 'TCP stands for Transmission Control Protocol, a reliable connection-oriented protocol.'
        },
        {
          id: '2',
          question: 'Which layer of the OSI model handles routing?',
          options: [
            'Data Link Layer',
            'Transport Layer',
            'Network Layer',
            'Session Layer'
          ],
          correctAnswer: 2,
          explanation: 'The Network Layer (Layer 3) is responsible for routing packets between networks.'
        },
        {
          id: '3',
          question: 'What is the default port number for HTTP?',
          options: [
            '21',
            '23',
            '80',
            '443'
          ],
          correctAnswer: 2,
          explanation: 'HTTP uses port 80 by default, while HTTPS uses port 443.'
        }
      ]
    },
    {
      id: 'dbms',
      name: 'Database Management Systems',
      description: 'Challenge your database design and SQL knowledge',
      icon: '🗄️',
      color: 'from-purple-500 to-purple-600',
      questions: [
        {
          id: '1',
          question: 'What is normalization in databases?',
          options: [
            'Creating backup copies',
            'Organizing data to reduce redundancy',
            'Indexing tables',
            'Encrypting data'
          ],
          correctAnswer: 1,
          explanation: 'Normalization is the process of organizing data to minimize redundancy and dependency.'
        },
        {
          id: '2',
          question: 'Which SQL command is used to retrieve data?',
          options: [
            'INSERT',
            'UPDATE',
            'SELECT',
            'DELETE'
          ],
          correctAnswer: 2,
          explanation: 'SELECT is used to retrieve data from database tables.'
        },
        {
          id: '3',
          question: 'What is ACID in database transactions?',
          options: [
            'A type of database',
            'Properties ensuring reliable transactions',
            'A query language',
            'A storage engine'
          ],
          correctAnswer: 1,
          explanation: 'ACID (Atomicity, Consistency, Isolation, Durability) are properties that guarantee reliable database transactions.'
        }
      ]
    },
    {
      id: 'ai',
      name: 'Artificial Intelligence',
      description: 'Test your AI and machine learning fundamentals',
      icon: '🤖',
      color: 'from-orange-500 to-orange-600',
      questions: [
        {
          id: '1',
          question: 'What is supervised learning?',
          options: [
            'Learning without labeled data',
            'Learning with labeled training data',
            'Learning through trial and error',
            'Learning by clustering'
          ],
          correctAnswer: 1,
          explanation: 'Supervised learning uses labeled training data to learn a mapping from inputs to outputs.'
        },
        {
          id: '2',
          question: 'Which algorithm is commonly used for classification?',
          options: [
            'K-means',
            'Decision Trees',
            'PCA',
            'DBSCAN'
          ],
          correctAnswer: 1,
          explanation: 'Decision Trees are popular classification algorithms that create a model predicting target values.'
        },
        {
          id: '3',
          question: 'What is overfitting in machine learning?',
          options: [
            'Model performs well on training and test data',
            'Model performs poorly on both datasets',
            'Model performs well on training but poorly on test data',
            'Model has too few parameters'
          ],
          correctAnswer: 2,
          explanation: 'Overfitting occurs when a model learns the training data too well, failing to generalize to new data.'
        }
      ]
    },
    {
      id: 'mathematics',
      name: 'Mathematics',
      description: 'Assess your mathematical reasoning and problem-solving skills',
      icon: '📊',
      color: 'from-red-500 to-red-600',
      questions: [
        {
          id: '1',
          question: 'What is the derivative of x²?',
          options: [
            'x',
            '2x',
            'x³',
            '2x²'
          ],
          correctAnswer: 1,
          explanation: 'Using the power rule, the derivative of x² is 2x.'
        },
        {
          id: '2',
          question: 'What is the value of sin(90°)?',
          options: [
            '0',
            '1',
            '-1',
            '0.5'
          ],
          correctAnswer: 1,
          explanation: 'sin(90°) = 1 in trigonometry.'
        },
        {
          id: '3',
          question: 'What is the determinant of a 2x2 identity matrix?',
          options: [
            '0',
            '1',
            '2',
            '4'
          ],
          correctAnswer: 1,
          explanation: 'The determinant of an identity matrix is always 1.'
        }
      ]
    }
  ];

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isQuizActive && timeLeft > 0 && !showResults) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && isQuizActive) {
      handleQuizSubmit();
    }
    return () => clearTimeout(timer);
  }, [isQuizActive, timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = (subject: Subject) => {
    setSelectedSubject(subject);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeLeft(300);
    setIsQuizActive(true);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (selectedSubject && currentQuestionIndex < selectedSubject.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuizSubmit = () => {
    setIsQuizActive(false);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedSubject(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setTimeLeft(300);
    setIsQuizActive(false);
  };

  const calculateScore = () => {
    if (!selectedSubject) return 0;
    let correct = 0;
    selectedSubject.questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / selectedSubject.questions.length) * 100);
  };

  if (!selectedSubject) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Interactive Quiz System</h1>
            <p className="text-lg text-gray-600">Choose a subject to test your knowledge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className={`h-32 bg-gradient-to-br ${subject.color} flex items-center justify-center`}>
                  <span className="text-6xl">{subject.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{subject.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Target className="h-4 w-4" />
                      <span>{subject.questions.length} Questions</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>5 Minutes</span>
                    </div>
                  </div>
                  <button
                    onClick={() => startQuiz(subject)}
                    className={`w-full bg-gradient-to-r ${subject.color} text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity`}
                  >
                    Start Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = selectedSubject.questions.filter(
      (question, index) => selectedAnswers[index] === question.correctAnswer
    ).length;

    return (
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <Trophy className={`h-16 w-16 mx-auto mb-4 ${
                score >= 80 ? 'text-yellow-500' : score >= 60 ? 'text-gray-400' : 'text-orange-500'
              }`} />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
              <p className="text-lg text-gray-600">{selectedSubject.name}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">{score}%</div>
                <p className="text-sm text-blue-800">Overall Score</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">{correctAnswers}</div>
                <p className="text-sm text-green-800">Correct Answers</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {selectedSubject.questions.length - correctAnswers}
                </div>
                <p className="text-sm text-red-800">Incorrect Answers</p>
              </div>
            </div>

            {/* Answer Review */}
            <div className="space-y-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Answer Review</h2>
              {selectedSubject.questions.map((question, index) => (
                <div key={question.id} className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mt-1" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className={`p-3 rounded-lg text-sm ${
                              optionIndex === question.correctAnswer
                                ? 'bg-green-100 text-green-800 border border-green-200'
                                : selectedAnswers[index] === optionIndex
                                ? 'bg-red-100 text-red-800 border border-red-200'
                                : 'bg-gray-50 text-gray-700'
                            }`}
                          >
                            {option}
                            {optionIndex === question.correctAnswer && (
                              <span className="ml-2 text-green-600 font-medium">✓ Correct</span>
                            )}
                            {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && (
                              <span className="ml-2 text-red-600 font-medium">✗ Your answer</span>
                            )}
                          </div>
                        ))}
                      </div>
                      {question.explanation && (
                        <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-sm text-blue-800">
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Take Another Quiz</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedSubject.questions[currentQuestionIndex];

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Quiz Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{selectedSubject.name}</h1>
              <p className="text-gray-600">
                Question {currentQuestionIndex + 1} of {selectedSubject.questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full">
                <Clock className="h-4 w-4" />
                <span className="font-semibold">{formatTime(timeLeft)}</span>
              </div>
              <button
                onClick={handleQuizSubmit}
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200"
              >
                Submit Quiz
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{Math.round(((currentQuestionIndex + 1) / selectedSubject.questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / selectedSubject.questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion.question}</h2>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => selectAnswer(index)}
                  className={`w-full text-left p-4 border-2 rounded-xl transition-all duration-200 ${
                    selectedAnswers[currentQuestionIndex] === index
                      ? 'border-blue-500 bg-blue-50 text-blue-900'
                      : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {selectedAnswers[currentQuestionIndex] === index && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={previousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {selectedSubject.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`w-8 h-8 rounded-full font-medium transition-colors ${
                    index === currentQuestionIndex
                      ? 'bg-blue-600 text-white'
                      : selectedAnswers[index] !== undefined
                      ? 'bg-green-200 text-green-800'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              onClick={currentQuestionIndex === selectedSubject.questions.length - 1 ? handleQuizSubmit : nextQuestion}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              {currentQuestionIndex === selectedSubject.questions.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;