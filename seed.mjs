import { createClient } from "@supabase/supabase-js";
import { faker } from "@faker-js/faker";
import { getDaysInMonth } from "date-fns";
import "dotenv/config";

// Init supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  {
    auth: { persistSession: false },
  },
);

// Get testuser userId
const { data: users } = await supabase.auth.admin.listUsers();
const testUser = users.users.find(
  (user) => user.email === "testuser@financetracker.io",
);

if (!testUser) {
  console.error("Test user not found.");
  process.exit(1);
}

async function deleteData() {
  /* 
  Delete all existing data in the transactions table
  */
  const { error: deleteError } = await supabase
    .from("transactions")
    .delete()
    .gte("id", 0);

  if (deleteError) {
    console.error("Error deleting existing data:", deleteError);
    return;
  }

  console.log("All data in the DB table deleted.");

  return;
}

async function seedTransactions() {
  /*
  Seed transactions in the database to cover 1 calender year
  */
  let transactions = [];

  const currentYear = new Date().getFullYear();

  function generateRandomTimestamp(year, month, day) {
    // Generate random hour (0-23)
    const hour = Math.floor(Math.random() * 24);

    // Generate random minute (0-59)
    const minute = Math.floor(Math.random() * 60);

    // Generate random second (0-59)
    const second = Math.floor(Math.random() * 60);

    // Generate random millisecond (0-999)
    const millisecond = Math.floor(Math.random() * 1000);

    // Create and return the Date object
    console.log(new Date(year, month, day, hour, minute, second, millisecond));
    return new Date(year, month, day, hour, minute, second, millisecond);
  }

  for (let month = 0; month < 12; month++) {
    let noOfDaysInMonth = getDaysInMonth(new Date(currentYear, month));

    for (let day = 1; day <= noOfDaysInMonth; day++) {
      for (let i = 0; i < 30; i++) {
        let transaction = {
          amount: faker.finance.amount({ min: 1000, max: 20500, dec: 0 }),
          payment_type: Math.random() > 0.5 ? "Card" : "Transfer",
          created_at: generateRandomTimestamp(currentYear, month, day),
          user_id: testUser.id,
        };

        transactions.push(transaction);
      }
    }
  }

  console.log("Done generating all transactions!");
  console.log("Sending transactions to supabase!");

  return;
}

if (process.argv[2] === "--import") {
  seedTransactions().catch(console.error);
} else if (process.argv[2] === "--delete") {
  deleteData();
}
