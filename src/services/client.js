import { createClient } from '@supabase/supabase-js';
export const client = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

export const client2 = createClient(
  process.env.REACT_APP_SUPABASE_URL2,
  process.env.REACT_APP_SUPABASE_KEY2
);

export function checkError({ data, error }) {
  if (error) {
    throw error;
  }
  return data;
}
