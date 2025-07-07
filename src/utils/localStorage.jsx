const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Sales Report",
        description: "Compile and submit Q2 sales report.",
        date: "2025-06-10",
        category: "Reporting",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client Meeting",
        description: "Discuss project milestones with client.",
        date: "2025-06-11",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Follow up on invoices",
        description: "Send reminders for overdue invoices.",
        date: "2025-06-08",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a new homepage layout.",
        date: "2025-06-07",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix login bug",
        description: "Resolve issues in login validation.",
        date: "2025-06-12",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team review",
        description: "Review tasks completed by teammates.",
        date: "2025-06-13",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Submit project report",
        description: "Write and submit final project report.",
        date: "2025-06-05",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Database backup",
        description: "Backup production database to cloud.",
        date: "2025-06-10",
        category: "IT",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Security audit",
        description: "Perform routine system security check.",
        date: "2025-06-11",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update firewall rules",
        description: "Implement new access control policies.",
        date: "2025-06-09",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Marketing Plan Draft",
        description: "Draft initial plan for summer campaign.",
        date: "2025-06-06",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social media post",
        description: "Design and publish weekly post.",
        date: "2025-06-10",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Customer feedback review",
        description: "Analyze recent customer feedback.",
        date: "2025-06-08",
        category: "Customer Support",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 0
    }
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Server Maintenance",
        description: "Perform scheduled maintenance on servers.",
        date: "2025-06-12",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Bug triage",
        description: "Sort and prioritize reported bugs.",
        date: "2025-06-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update documentation",
        description: "Update project technical documents.",
        date: "2025-06-05",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Onboarding session",
        description: "Assist new joiners with system setup.",
        date: "2025-06-09",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  }
];

  
  
        const admin=[ {
          firstName: "Vikram",
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ];

   

    export const setLocalStorage=()=>{
        // localStorage.setItem('employees',JSON.stringify(employees));
        // localStorage.setItem('admin',JSON.stringify(admin));

        if (!localStorage.getItem('employees')) {
            localStorage.setItem('employees', JSON.stringify(employees));
        }

        if (!localStorage.getItem('admin')) {
            localStorage.setItem('admin', JSON.stringify(admin));
        }

        

    };

    export const getLocalStorage=()=>{

        const employees=JSON.parse(localStorage.getItem("employees")|| "[]");

        const admin=JSON.parse(localStorage.getItem('admin')|| "[]");

        
        return {employees,admin};

        

    }
      
  