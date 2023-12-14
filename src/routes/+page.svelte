<script>
export let data;

</script>


<form method="post" action="?/create">
  <input type="text" required name="name" placeholder="Country를 입력하세요" />
  <button type="submit">입력</button>
</form>


  <table>
    {#each data.countries as country(country.id)}
    <tr>
      <td>{country.id}<input id={country.id} hidden /></td>
      <td><input bind:value={country.name} name="name" >  </td>
      <td><form method="post" action="?/update">
        <input name ="id" value={country.id} hidden />
        <input name ="name" value={country.name} hidden />
        <button name="update" type="submit">수정</button>
      </form></td>
        <td>
          <form method="post" action="?/delete">
          <input name = "id" value =  {country.id} hidden />
          <button  name="delete" type="submit">삭제</button>
        </form>
        </td>
    </tr>
    {/each}
  </table>







