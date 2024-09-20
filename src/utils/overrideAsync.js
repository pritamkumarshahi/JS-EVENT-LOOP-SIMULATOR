export function overrideAsync(setTaskQueue, setMicrotaskQueue, setCallStack) {
  const originalSetTimeout = window.setTimeout;
  const originalThen = Promise.prototype.then;
  const originalConsoleLog = console.log;

  return {
    start: () => {
      // Override setTimeout (Tasks)
      window.setTimeout = (fn, delay) => {
        setTaskQueue((prev) => [...prev, `Task (setTimeout)`]);
        return originalSetTimeout(() => {
          fn();
        }, delay);
      };

      // Override Promise.then (Microtasks)
      Promise.prototype.then = function (onFulfilled, onRejected) {
        setMicrotaskQueue((prev) => [...prev, `Microtask (Promise)`]);
        return originalThen.call(this, onFulfilled, onRejected);
      };

      // Wrap synchronous code tracking
      console.log = (...args) => {
        setCallStack((prev) => [...prev, `Synchronous operation (console.log)`]);
        originalConsoleLog(...args);  // Execute the original console.log
      };
    },

    stop: () => {
      // Restore the original implementations
      window.setTimeout = originalSetTimeout;
      Promise.prototype.then = originalThen;
      console.log = originalConsoleLog;  // Reset console.log to the original
    },
  };
}