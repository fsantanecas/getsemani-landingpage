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
  const { error } = await supabase.from('leads').insert([{
    nome: lead.nome,
    empresa: lead.empresa || null,
    email: lead.email,
    whatsapp: lead.whatsapp,
    origem: 'Site',
    observacoes: lead.desafio || null,
    status: 'Novo Lead',
    temperatura: 'Frio',
    interesse: [],
    score: 0,
  }]);
  return error;
}
