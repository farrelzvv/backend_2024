<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();

        $response = [
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation rules
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'nim' => 'required|string|unique:students,nim',
            'email' => 'required|email|unique:students,email',
            'majority' => 'required|string|max:100'
        ]);

        // Check validation
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Input and store data
        $student = Student::create($request->only(['name', 'nim', 'email', 'majority']));

        return response()->json([
            'message' => 'Successfully created new student',
            'data' => $student
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Student::find($id);

        if ($student) {
            return response()->json([
                'message' => 'Student found',
                'data' => $student
            ], 200);
        }

        return response()->json(['message' => 'Student not found'], 404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // Validation rules
        $validator = Validator::make($request->all(), [
            'name' => 'sometimes|string|max:255',
            'nim' => 'sometimes|string|unique:students,nim,' . $id,
            'email' => 'sometimes|email|unique:students,email,' . $id,
            'majority' => 'sometimes|string|max:100'
        ]);

        // Check validation
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        // Update data
        $student->update($request->only(['name', 'nim', 'email', 'majority']));

        return response()->json([
            'message' => 'Student updated successfully',
            'data' => $student
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        $student->delete();

        return response()->json(['message' => 'Student deleted successfully'], 200);
    }
}
