import { supabase } from '@/utils/supabase/supabase';

// Obtener trámites para un Cliente
export const getTramitesCliente = async (userId: string) => {
  const { data, error } = await supabase
    .from('cliente_tramites')
    .select('*')
    .eq('cliente_id', userId);

  if (error) throw new Error(error.message);
  return data;
};

// Obtener trámites para un Colaborador
export const getTramitesColaborador = async (userId: string) => {
  const { data, error } = await supabase
    .from('colaborador_tramites')
    .select('*')
    .eq('colaborador_id', userId);

  if (error) throw new Error(error.message);
  return data;
};

// Obtener trámites para un Jefe
export const getTramitesJefe = async (userId: string) => {
  const { data, error } = await supabase
    .from('jefe_tramites')
    .select('*')
    .eq('jefe_id', userId);

  if (error) throw new Error(error.message);
  return data;
};
