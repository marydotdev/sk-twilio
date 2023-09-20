<script>
  export let data;

  function formatTime(dateTime) {
    let time = new Date(dateTime).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });

    return time
  }

  function formatDate(dateTime) {
    let date = new Date(dateTime).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });

    return date
  }
</script>
<svelte:head>
	<title>sk-twilio feed</title>
</svelte:head>

<div class="py-12 px-4">
  <div class="max-w-lg mx-auto w-full ">
    <a href="/feed"><h3 class="pb-4 text-xl">Feed</h3></a>
    <div class="flex flex-col gap-4">
      {#each data.twilio as thought}
        <div class="border border-zinc-300 bg-zinc-50">
          <div class="p-4 flex flex-col gap-4">
            <p class="text-lg">{thought.text}</p>
            {#if (thought.mediaUrl)}
              <div class="">
                <img src={thought.mediaUrl} alt="thought pic" class="object-cover h-96 w-full rounded-xl" />
              </div>
            {/if}
            <div class="flex justify-between">
              <p>{formatTime(thought.created_at)}</p>
              <p>{formatDate(thought.created_at)}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
