import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tgnfttlkzzaqsqpbithu.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbmZ0dGxrenphcXNxcGJpdGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk0OTgxOTYsImV4cCI6MjA5NTA3NDE5Nn0.z2t_0eTPOATgZ7TBJ5VYhLlIoqbvtkXnPNohr4YFrJs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  nome: string;
  empresa: string;
  email: string;
  whatsapp: string;
  desafio: string;
  idioma?: string;
}

export async function saveLead(lead: Lead) {
  const { error } = await supabase.from('leads').insert([
    { ...lead, origem: 'landing_page' },
  ]);
  return error;
}

/*
  SQL to create the leads table in your Supabase project:

  CREATE TABLE IF NOT EXISTS leads (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    nome TEXT NOT NULL,
    empresa TEXT,
    email TEXT NOT NULL,
    whatsapp TEXT,
    desafio TEXT,
    origem TEXT DEFAULT 'landing_page',
    idioma TEXT DEFAULT 'pt-BR',
    created_at TIMESTAMPTZ DEFAULT NOW()
  );

  ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

  CREATE POLICY "Allow landing page inserts" ON leads
    FOR INSERT WITH CHECK (true);
*/
