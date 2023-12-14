<script>
export let data;

</script>


<form method="post" action="?/create">
  <input type="text" required name="name" placeholder="Country를 입력하세요" />
  <button type="submit">입력</button>
</form>


  <table>
    {#each data.countries as country}
    <tr><td>{country.id}</td><td>{country.name}</td>
        <td>
          <form method="post" action="?/delete">
          <input id = "id" name = "id" value =  {country.id} hidden />
          <button  name="delete" type="submit">삭제</button>
        </form>
        </td>
    </tr>
    {/each}
  </table>







