type MockDb = {
  execute: () => Promise<{ rows: unknown[]; rowCount: number }>;
  select: () => {
    from: () => {
      orderBy: () => {
        limit: () => Promise<unknown[]>;
      };
    };
  };
  insert: () => {
    values: () => {
      returning: () => Promise<unknown[]>;
      onConflictDoUpdate: () => Promise<void>;
    };
  };
};

export const db: MockDb = {
  execute: async () => ({ rows: [], rowCount: 0 }),
  select: () => ({
    from: () => ({
      orderBy: () => ({
        limit: async () => [],
      }),
    }),
  }),
  insert: () => ({
    values: () => ({
      returning: async () => [],
      onConflictDoUpdate: async () => undefined,
    }),
  }),
};
