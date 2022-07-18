
<script setup>
import { ref, onMounted } from 'vue'

// reactive state
const count = ref(0)
const message = ref('')
// functions that mutate state and trigger updates
function increment() {
  count.value++
}

async function getMessage() {
    const resp = await axios.get('/api/teste')

    message.value = resp.data.message
}

// lifecycle hooks
onMounted(() => {
  console.log(`The initial count is ${count.value}.`)
})
</script>
<template>
    <button @click="increment">Count is: {{ count }}</button>
    <button @click="getMessage">Mensagem</button>
    <br>
    <q-btn color="primary" @click="getMessage">Mensagem do Backend</q-btn>
    <q-chip icon="bookmark">Teste Q-CHIP</q-chip>
    <q-card>
        <q-card-section>
        {{ message }}
        </q-card-section>
    </q-card>
</template>
