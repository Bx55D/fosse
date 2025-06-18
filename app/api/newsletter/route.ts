import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the email
    const validatedData = newsletterSchema.parse(body)
    const { email } = validatedData

    // Send confirmation email to subscriber
    const { data, error } = await resend.emails.send({
      from: 'newsletter@fossecreative.co.uk',
      to: [email],
      subject: 'Welcome to Fosse Creative Newsletter!',
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f5f3f0;">
          <!-- Header -->
          <div style="background-color: #29241e; padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
            <div style="margin-bottom: 16px;">
              <div style="display: inline-block; width: 48px; height: 48px; background-color: #f5f3f0; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="color: #29241e;">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 11l2 2 4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
            <h1 style="color: #f5f3f0; margin: 0; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">Welcome to Fosse Creative</h1>
            <p style="color: rgba(245, 243, 240, 0.8); margin: 12px 0 0 0; font-size: 16px; font-weight: 400;">Thank you for joining our newsletter</p>
          </div>
          
          <!-- Main Content -->
          <div style="background-color: #ffffff; padding: 40px 20px; border-left: 1px solid #e5e1db; border-right: 1px solid #e5e1db;">
            <h2 style="color: #29241e; margin-bottom: 20px; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">You're all set!</h2>
            
            <p style="color: #5e4a3a; line-height: 1.6; margin-bottom: 24px; font-size: 16px;">
              We're excited to have you join our community! You'll receive carefully curated updates about:
            </p>
            
            <div style="background-color: #faf9f7; border: 1px solid #e5e1db; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
              <ul style="color: #5e4a3a; line-height: 1.8; margin: 0; padding-left: 20px; font-size: 15px;">
                <li style="margin-bottom: 8px;">Latest web design trends and creative insights</li>
                <li style="margin-bottom: 8px;">New project showcases and detailed case studies</li>
                <li style="margin-bottom: 8px;">Industry best practices and technical tips</li>
                <li style="margin-bottom: 0;">Exclusive offers and early access to our services</li>
              </ul>
            </div>
            
            <div style="background-color: #29241e; color: #f5f3f0; padding: 20px; border-radius: 12px; margin-bottom: 32px; text-align: center;">
              <p style="margin: 0; font-size: 15px; opacity: 0.8;">Subscription confirmed for</p>
              <p style="margin: 8px 0 0 0; font-weight: 600; font-size: 16px;">${email}</p>
            </div>
            
            <p style="color: #5e4a3a; line-height: 1.6; margin-bottom: 32px; font-size: 15px;">
              Questions? We're here to help. Reach out to us at 
              <a href="mailto:hello@fossecreative.com" style="color: #29241e; text-decoration: underline; text-decoration-color: rgba(41, 36, 30, 0.3);">hello@fossecreative.com</a>
            </p>
            
            <div style="text-align: center;">
              <a href="https://fossecreative.co.uk" style="display: inline-block; background-color: #29241e; color: #f5f3f0; padding: 14px 32px; text-decoration: none; border-radius: 12px; font-weight: 500; font-size: 15px; letter-spacing: -0.2px; transition: all 0.2s ease;">
                Visit Our Website →
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #faf9f7; padding: 32px 20px; text-align: center; border-radius: 0 0 12px 12px; border: 1px solid #e5e1db; border-top: none;">
            <div style="border-top: 1px solid #e5e1db; padding-top: 24px;">
              <p style="color: #8a7965; font-size: 14px; margin: 0 0 8px 0;">
                © ${new Date().getFullYear()} Fosse Creative. All rights reserved.
              </p>
              <p style="color: #8a7965; font-size: 13px; margin: 0; opacity: 0.8;">
                Inspired by the historic Fosse Way • You can unsubscribe at any time by contacting us.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
Welcome to Fosse Creative Newsletter!

Thank you for joining our newsletter. You're all set!

We're excited to have you in our community! You'll receive carefully curated updates about:

• Latest web design trends and creative insights
• New project showcases and detailed case studies  
• Industry best practices and technical tips
• Exclusive offers and early access to our services

Subscription confirmed for: ${email}

Questions? We're here to help. Reach out to us at hello@fossecreative.com

Visit our website: https://fossecreative.co.uk

---
© ${new Date().getFullYear()} Fosse Creative. All rights reserved.
Inspired by the historic Fosse Way

You can unsubscribe at any time by contacting us.
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send confirmation email' },
        { status: 500 }
      )
    }

    // Send notification to admin
    await resend.emails.send({
      from: 'alerts@fossecreative.co.uk',
      to: ['ben@fossecreative.co.uk'],
      subject: 'New Newsletter Subscription',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; margin-bottom: 20px;">New Newsletter Subscription</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
        </div>
      `,
      text: `
New Newsletter Subscription

Email: ${email}
Date: ${new Date().toLocaleDateString('en-GB', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
      `,
    })

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}