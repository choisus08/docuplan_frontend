<template>
    <form class="add-appt-form">
        <div class="input" >
            <label>Appointment Title</label>
            <input v-model="appointment_title" type="text" placeholder="Physical" required />
            <label>Doctor Name</label>
            <input v-model="doctor_name" type="text" />
            <label>Doctor Specialist</label>
            <input v-model="doctor_specialist" type="text" placeholder="Family Practitionor" />
            <label>Address</label>
            <input v-model="address" type="text" />
            <label>Date</label>
            <input v-model="date" type="date" required />
            <label>Time</label>
            <input v-model="time" type="time" required />
            <label>Notes</label>
            <input v-model="notes" type="text" placeholder="Notes" /> 
        </div> 
            <label>
                <input type="checkbox" v-model="newApptHighPriority"/>
                High Priority
            </label>
            <button @click="addAppt" class="addBtn">+</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
            appointment_title: '',
            doctor_name: '',
            doctor_specialist: '',
            address: '',
            date: '',
            time: '',
            notes: '',
            }
        }
        
    }
</script>

<style scoped>

</style>