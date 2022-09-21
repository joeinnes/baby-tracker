<script lang="ts">
  import { db } from '$lib/db/db';
  let email = '';
  let password = '';
  const logIn = async () => {
    db.logIn('batman', 'brucewayne').then(function (batman) {
      console.log("I'm Batman.");
    });
  }
</script>

<form on:submit|preventDefault={logIn}>
  <input type="email" bind:value={email} />
  <input type="password" bind:value={password} />
  <button type="submit">Submit</button>
</form>