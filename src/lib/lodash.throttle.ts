type ThrottleFunction<T extends (...args: any[]) => void> = (func: T, delay: number) => T;

const throttle: ThrottleFunction<any> = (func, delay) => {
  let lastCallTime = 0;
  let timeout: NodeJS.Timeout;

  function subFunc(...args: any[]) {
    const currentTime = Date.now();

    if (currentTime - lastCallTime >= delay) {
      func(...args);
      lastCallTime = currentTime;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
        lastCallTime = currentTime;
      }, delay);
    }
  }

  return subFunc;
};

export default throttle;
