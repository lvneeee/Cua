<script setup lang="ts">
import { ref } from 'vue'
import { useForm, type SubmissionHandler } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// ✅ Zod schema
const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string()
    .min(9, "Phone must be at least 9 digits")
    .regex(/^[0-9]+$/, "Phone must contain only numbers"),
  company: z.string().optional(),
  goal: z.string().optional(),
})

// ✅ Type của form values
type FormValues = z.infer<typeof schema>

// ✅ Setup form
const form = useForm<FormValues>({
  validationSchema: toTypedSchema(schema),
})

const loading = ref(false)

// ✅ onSubmit với error handling
const onSubmit: SubmissionHandler<FormValues> = async (values, ctx) => {
  // Validation errors are handled before onSubmit is called

  if (loading.value) return
  loading.value = true
  try {
    const res = await fetch('https://sheetdb.io/api/v1/ptztq539x5snp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: [values] }),
    })

    if (!res.ok) throw new Error("Network error")
    const data = await res.json()
    console.log('✅ Saved:', data)

    alert('Gửi thành công!')
    form.resetForm()
  } catch (err) {
    console.error(err)
    alert('❌ Gửi thất bại, vui lòng thử lại!')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <!-- Dùng prop onSubmit -->
  <Form :onSubmit="onSubmit as any" class="space-y-6 w-full">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <!-- Full Name -->
      <FormField name="fullName" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Full Name *</FormLabel>
          <FormControl>
            <Input type="text" placeholder="Full Name" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Email -->
      <FormField name="email" v-slot="{ componentField }">
        <FormItem>
          <FormLabel>Email *</FormLabel>
          <FormControl>
            <Input type="email" placeholder="Email" v-bind="componentField" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
    </div>

    <!-- Phone -->
    <FormField name="phone" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Phone Number *</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Phone Number" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Company -->
    <FormField name="company" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Company Name</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Company Name" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Project -->
    <FormField name="project" v-slot="{ componentField }">
      <FormItem>
        <FormLabel>Project & Marketing Goals</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Describe your project and marketing goals..."
            rows="4"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <!-- Submit -->
    <Button type="submit" :disabled="loading" class="w-full" size="lg">
      <span v-if="!loading">Send Consultation Request</span>
      <span v-else>Sending...</span>
    </Button>
  </Form>
</template>
