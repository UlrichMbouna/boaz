import { mockService } from '../../services/mock/user.mock';

export const fetchServiceFromMock = (): Promise<typeof mockService> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockService);
    }, 700); // délai simulé
  });
};