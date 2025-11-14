/*
  # Create Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address for response
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when message was received
      - `read` (boolean) - Whether the message has been read

  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for anonymous users to insert messages
    - Add policy for authenticated admins to read messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update read status"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);
