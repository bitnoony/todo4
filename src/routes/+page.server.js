import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("countries").select();
  return {
    countries: data ?? [],
  };
}

export const actions={
  create: async ({request})=>{
      const form = await request.formData();
      const name = form.get('name')?? ''; // data마다 한줄씩     
      const { data, error } = await supabase
    .from('countries')
    .insert([
      { name: name}, // 데이타 입력
    ])
    .select() 
  },

  delete: async({request})=>{
    const form = await request.formData();
    const id = form.get('id')??'';
    const { error } = await supabase
    .from('countries')
    .delete()
    .eq('id', id) 
  },

  update: async({request}) => {
    const form = await request.formData();
    const id = form.get('id')??'';
    const name = form.get('name')??'';
    const { data, error } = await supabase
    .from('countries')
    .update({ name: name })
    .eq('id', id)
    .select()
  }

}
