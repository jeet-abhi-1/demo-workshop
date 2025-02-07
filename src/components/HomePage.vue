<template>
  <div class="container">
    <nav class="navbar">
      <button @click="toggleTaskForm">Home</button>
    </nav>
    <div class="landing-page">
      <div class="buttons">
        <button @click="toggleTaskForm">Create Task</button>
        <button>View Tasks</button>
      </div>
      <div v-if="showTaskForm" class="task-form">
        <h3>Create a New Task</h3>
        <div class="task-fields">
          <input v-model="taskTitle" placeholder="Task Title" />
          <textarea v-model="taskDescription" placeholder="Task Description" class="fixed-textarea"></textarea>
          <div class="form-buttons">
            <button @click="resetForm" class="reset">Reset</button>
            <button @click="saveTask" class="submit">Save/Submit</button>
          </div>
        </div>
        <div v-if="taskSaved" class="success-message">Task saved successfully!</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showTaskForm = ref(false);
const taskTitle = ref('');
const taskDescription = ref('');
const taskSaved = ref(false);

const toggleTaskForm = () => {
  showTaskForm.value = !showTaskForm.value;
};

const resetForm = () => {
  taskTitle.value = '';
  taskDescription.value = '';
};

const saveTask = () => {
  taskSaved.value = true;
  setTimeout(() => {
    taskSaved.value = false;
  }, 3000);
  resetForm();
};
</script>

<style>
.container {
  text-align: center;
  padding: 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
}

.navbar {
  background-color: #2c3e50;
  padding: 15px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.navbar button {
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
}

.buttons {
  margin-top: 20px;
}

.landing-page button {
  margin: 10px;
  padding: 12px 28px;
  border: none;
  border-radius: 6px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 600;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.landing-page button:hover {
  background-color: #2980b9;
}

.task-form {
  margin-top: 20px;
  padding: 25px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 450px;
  margin: auto;
}

.task-form h3 {
  margin-bottom: 15px;
  font-size: 20px;
  color: #2c3e50;
}

.task-fields {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.task-form input, .task-form textarea {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 15px;
}

.task-form .fixed-textarea {
  height: 120px;
  resize: none;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.task-form button {
  width: 48%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
}

.task-form .submit {
  background-color: #27ae60;
}

.task-form .submit:hover {
  background-color: #1e8449;
}

.task-form .reset {
  background-color: #e74c3c;
}

.task-form .reset:hover {
  background-color: #c0392b;
}

.success-message {
  margin-top: 15px;
  padding: 10px 0;
  background-color: #2ecc71;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  text-align: center;
  max-width: 450px;
  margin: auto;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fade-in-out 3s ease-in-out;
}

@keyframes fade-in-out {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}
</style>
