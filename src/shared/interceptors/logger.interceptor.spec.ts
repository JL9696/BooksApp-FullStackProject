import { LoggerInterceptor } from '../interceptors/logger.interceptors';

describe('LoggerInterceptor', () => {
  it('should be defined', () => {
    expect(new LoggerInterceptor()).toBeDefined();
  });
});