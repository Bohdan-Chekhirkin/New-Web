// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
	// Ініціалізуємо змінну max як перший елемент масиву
	let max = numbers[0];
	
	for (let number of numbers) {
	  // Якщо поточний елемент більше за max, оновлюємо max
	  if (number > max) {
		max = number;
	  }
	}
	
	return max;
  }

// Приклади використання:
console.log(findMax([3, 5, 7, 2, 8])); // Виведе: 8
console.log(findMax([10, 20, 5, 30])); // Виведе: 30

module.exports = findMax;