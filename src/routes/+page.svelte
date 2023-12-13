<script>
import { supabase } from "$lib/supabaseClient";
import { onMount } from 'svelte';
import { writable } from "svelte/store";

export let data;

let text = writable('')

async function insertName() {
const { data, error } = await supabase
  .from('countries')
  .insert([
    { name: $text},
  ])
  .select() 
  location.reload()
}


async function deleteName(num) {

const { error } = await supabase
.from('countries')
.delete()
.eq('id', num) 
location.reload()  
}

</script>

<input type="text" bind:value ={$text} 
       on:keydown={(e) => {e.key === 'Enter' && insertName()}} autofocus/> 
<button on:click={insertName}>
    입력
</button>

  <table>
    {#each data.countries as country}
    <tr><td>{country.id}</td><td>{country.name}</td>
        <td>
            <button on:click = {deleteName(country.id)}>삭제</button>
        </td>
    </tr>
    {/each}
  </table>

